<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\View;
use App\Models\Course;
use App\Models\CourseUser;
use Illuminate\Http\Request;
use App\Http\Requests\UserRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;



class UserController extends Controller
{

    public function index()
    {
        $users =  User::all();
        return response()->json($users);

    }

    public function store(Request $request)
    {
        
    }


    public function show($id)
    {
        $user = User::find($id);
        return response()->json($user);

    }

    public function update(UserRequest $request, $id)
    {
        $user = auth()->user();
        $data = $request->all();

        // Controlla se l'utente autenticato ha i permessi per modificare questo account
        if ($user->id != $id) {
            return response()->json(['message' => 'Non hai i permessi per modificare questo account'], 403);
        }

        // Trova l'utente da modificare
        $user = User::findOrFail($id);

        // Aggiorna l'immagine profilo
        if (isset($data['file_img'])) {
            $filestorage = FilestorageController::storeFile($request, 'image/user', 'file_img', 'profile_img');
            $user->update([
                'filestorage_id' => $filestorage->id,
            ]);
        }

        // Aggiorna il numero di telefono
        if (isset($data['phone_number'])) {
            $user->phone_number = $data['phone_number'];
        }

        // Aggiorna la password
        if (isset($data['current_password']) && isset($data['new_password']) && isset($data['confirm_password'])) {
            if(!Hash::check($data['current_password'], $user->password)){
                return response()->json(['message' => 'Password attuale non corretta'], 403);
            }
            if(Hash::check($data['new_password'], $user->password)) {
                return response()->json(['message' => 'La nuova password deve essere diversa da quella attuale'], 403);
            }
            if($data['new_password'] != $data['confirm_password']){
                return response()->json(['message' => 'Le password non corrispondono'], 403);
            }
            AuthController::changePassword($request);
        }
        
        // Salva le modifiche
        try {
            $user->save();
            return response()->json([
                'user' => $user,
                'image' => $filestorage,
                'message' => 'Utente modificato con successo',
            ]);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Errore durante la modifica dell\'utente', 'error' => $e->getMessage()], 500);
        }
    }


    public function destroy($id)
    {
        $user = auth()->user();

        // Controlla se l'utente loggato sta cercando di eliminare un altro account
        if ($user->id != $id) {
            return response()->json(['message' => 'Non hai i permessi per eliminare questo account'], 403);
        }

        // Trova e elimina l'utente
        $userToDelete = User::findOrFail($id);
        $userToDelete->delete();

        return response()->json(['message' => 'Utente eliminato con successo']);
    }


    public function addProfessor(UserRequest $request)
    {

        $data = $request->all();
        $loggedUser = auth()->user();
        

        if($loggedUser->hasRole('superadmin')){
            $user = User::findOrFail($data['user_id']);
            $course = Course::findOrFail($data['course_id']);

            // controllo se l'associazione esiste già
            $existingAssociation = CourseUser::where('user_id', $user->id)
                                              ->where('course_id', $course->id)
                                              ->first();
            if ($existingAssociation) {
                return response()->json(['message' => 'Il professore è già associato a questo corso.'], 409);
            }

            CourseUser::create([
                'user_id' => $user->id,
                'course_id' => $course->id,
                'is_professor' => true,
            ]);

            return response()->json([
                'message' => 'Professore aggiunto con successo',
                'user' => $user,
                'course' => $course,
                'is_professor' => true,
            ], 201);
        } else {
            return response()->json(['message' => 'Utente non autorizzato'], 401);
        }
    }

    public function courseRegistration($id)
    {
        $user = Auth::user();
        $course = Course::findOrfail($id);

        $existingRegistration = CourseUser::where('user_id', $user->id)->where('course_id', $course->id)->first();

        if (!$existingRegistration) {
            // Aggiunge l'iscrizione alla tabella pivot
            CourseUser::create([
                'user_id' => $user->id,
                'course_id' => $course->id,
                'is_professor' => false,
            ]);
            return response()->json([
                'message' => 'Iscrizione avvenuta con successo.',
                'user' => $user,
                'course' => $course,
                'is_professor' => false,
            ], 201);
        }
        // Se l'utente è già iscritto, ritorna un messaggio di errore
        return response()->json(['message' => 'Sei già iscritto a questo corso.'], 400);
    }

    public function removeCourseRegistration($id)
    {
        $user = Auth::user();
        $course = Course::findOrfail($id);
        $existingRegistration = CourseUser::where('user_id', $user->id)->where('course_id', $course->id)->first();
        if ($existingRegistration) {
            $existingRegistration->delete();
            return response()->json([
                'message' => 'Iscrizione rimossa con successo.',
            ], 200);
        }
        // Se l'utente non è più iscritto, ritorna un messaggio di errore
        return response()->json(['message' => 'Non sei più iscritto a questo corso.'], 400);
    }

    public function addView($id)
    {
        $user = Auth::user();
        $course = Course::findOrfail($id);

        $existingView = View::where('user_id', $user->id)->where('course_id', $course->id)->first();
        if (!$existingView) {
            View::create([
                'user_id' => $user->id,
                'course_id' => $course->id,
            ]);
            return response()->json([
                'message' => 'View aggiunta con successo.',
            ], 201);
        } else {
            return response()->json(['message' => 'View già esistente.'], 400);
        }
    }

    public function showRegisteredCourses()
    {
        $user = Auth::user();

        // Recupera i corsi a cui l'utente è registrato
        $registeredCourses = Course::whereHas('users', function ($query) use ($user) {
            $query->where('user_id', $user->id);
        })->get();

        return response()->json($registeredCourses);
    }

    public function formRegistration(Request $request)
    {
        $request->validate([
            'firstname' => 'required|string|max:255',
            'lastname' => 'required|string|max:255',
            'phone_number' => 'required|string',
            'email' => 'required|string|email|max:255|unique:users',
            'institution_name' => 'required|string|max:255',
            'institution_type' => 'required|string|in:University/4 Year College,2 Year College,Graduate or Professional School,Ministry of Education,Other',
            'job_role' => 'required|string|in:President/Provost,Chancellor/Rector,Vice-President/Vice-Provost,Vice-Chancellor/Vice-Rector,Registrar,CEO,COO/CIO,Dean,Department Head,Director,Professor,Student',
            'department' => 'required|string|in:Academic Affairs,Career Services,Continuing Education,Enrollment Management,Executive Leadership,International,strategic Planning,Student Affairs,Teaching/Faculty/Research,Other',
            'needs' => 'required|string|in:Get in touch with sales,Existing customer support,Learner support,Courses for myself,Other',
        ]);

        $user = User::create([
            'firstname' => $request->firstname,
            'lastname' => $request->lastname,
            'phone_number' => $request->phone_number,
            'email' => $request->email,
            'institution_name' => $request->institution_name,
            'institution_type' => $request->institution_type,
            'job_role' => $request->job_role,
            'department' => $request->department,
            'needs' => $request->needs,
        ]);

        return response()->json([
            'message' => 'I dati sono stati inviati con successo.',
            'user' => $user,
        ], 201);
    }

}
