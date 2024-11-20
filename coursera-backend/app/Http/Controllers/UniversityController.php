<?php

namespace App\Http\Controllers;

use App\Http\Requests\UniversityRequest;
use App\Models\Course;
use Illuminate\Http\Request;
use App\Models\Filestorage;
use App\Models\University;
use App\Models\User;

class UniversityController extends Controller
{
    
    public function index()
    {
        $universities =  University::all();
        return response()->json($universities);
    }

   
    public function store(UniversityRequest $request)
    {
        $user = User::find(auth()->user()->id);
        $data = $request->all();

        if (!$user->hasRole('superadmin')) {
            return response()->json(['message' => 'Accesso negato'], 403);
        }

        $filestorage = FilestorageController::storeFile($request, 'image/university', 'file_img', 'university_img');

        $filestorage_id = 1;

        if($filestorage != null){
            $filestorage_id = $filestorage->id;
        }

        $university = University::create([
            'name' => $data['name'],
            'description' => $data['description'],
            'filestorage_id' => $filestorage_id,  
        ]);

        return response()->json([
            'message' => 'Università aggiunta con successo',
            'university' => $university,
            'filestorage' => $filestorage
        ], 201);
    }


    public function show($id)
    {
        $university = University::findOrFail($id);
        return response()->json($university);
    }


    public function update(UniversityRequest $request, $id)
    {
        $user = User::find(auth()->user()->id);
        $data = $request->all();

        if (!$user->hasRole('superadmin')) {
            return response()->json(['message' => 'Accesso negato'], 403);
        }

        $university = University::findOrFail($id);

        $filestorage = FilestorageController::storeFile($request, 'image/university', 'file_img', 'university_img');

        if(isset($data['file_img'])){
            $university->update([
                'name' => $data['name'],
                'description' => $data['description'],
                'filestorage_id' => $filestorage->id
            ]);
        } else {
            $university->update([
                'name' => $data['name'],
                'description' => $data['description'],
            ]);
        }

        return response()->json([
            'message' => 'University aggiornata con successo',
            'university' => $university,
        ], 200);
    }


    public function destroy($id)
    {
        $user = User::find(auth()->user()->id);
        if($user->hasRole('superadmin')){
            $university = University::findOrFail($id);
            $university->delete();

            return response()->json(['message' => 'Università eliminata con successo']);
        } else {
            return response()->json(['message' => 'Non hai i permessi']);
        }
    }


    public function getUniversityCourses($id)
    {
        $university = University::with('courses')->findOrFail($id);

        return response()->json(['courses' => $university->courses, 'message' => 'Corsi recuperati con successo']);
    }


    public function getUniversityInstructors($id)
    {
        $university = University::findOrFail($id);

        $courseIds = $university->courses()->pluck('courses.id')->toArray();

        // Recupera i professori associati ai corsi dell'università
        $professors = User::whereHas('courses', function ($query) use ($courseIds) {
            $query->whereIn('courses.id', $courseIds)->where('course_users.is_professor', true);
        })->get();

        return response()->json([
            'professors' => $professors,
            'message' => 'Professori recuperati con successo'
        ]);
    }
}

