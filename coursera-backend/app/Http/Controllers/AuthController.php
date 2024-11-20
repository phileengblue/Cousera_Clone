<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use App\Models\Role;
use App\Models\User;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Requests\AuthRequest;
use Illuminate\Support\Facades\DB;
use Tymon\JWTAuth\Facades\JWTAuth;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;



class AuthController extends Controller
{
    public function registerUser (AuthRequest $request)
    {

        try {

        $data = $request->all();
        $id = Str::uuid()->toString(); // Genero un UUID per l'utente

        DB::beginTransaction();

        // Convertire la data di nascita nel formato corretto
        $isoDate = $data['birth_date'];
        $date = Carbon::parse($isoDate)->format('d-m-Y');

        // Ora puoi usare la data convertita nel formato che desideri
        $formattedDate = Carbon::createFromFormat('d-m-Y', $date)->format('Y-m-d');

        $user = User::create([
            'id' => $id,
            'firstname' => $data['firstname'],
            'lastname' => $data['lastname'],
            'birth_date' => $formattedDate,
            'gender' => $data['gender'],
            'phone_number' => $data['phone_number'],
            'email' => $data['email'],
            'password' => Hash::make($data['password']),
        ]);


        $user->attachRole('user');

        DB::commit();

        return response()->json([
            'status' => 'success',
            'message' => 'Registrazione avvenuta con successo',
            'result' => $user
        ], 200);

        } catch(\Exception $e)
        {
            DB::rollBack();
            return response()->json(['error' => 'Registrazione fallita: ' . $e->getMessage()], 500);
        }
    }

    public function login(AuthRequest $request)
    {

        try {

            $credentials = $request->all();

            if (!$token = Auth::attempt($credentials)) {
                return response()->json([
                    'status' => 'error',
                    'message' => 'Credenziali errate',
                ], 400);
            }

            $user = Auth::user();
            $roles = $user->roles()->get(); 

            info($roles);


            return response()->json([
                'status' => 'success',
                'user' => $user,
                'roles' => $roles,
                'authorization' => [
                    'token' => $token,
                    'type' => 'bearer',
                ],
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'Errore del server: ' . $e->getMessage(),
            ], 500);
        }
    }

    public function logout()
    {
        auth()->logout();

        return response()->json(['message' => 'Disconnessione avvenuta con successo.']);
    }

    public static function changePassword(Request $request)
    {
        $token = JWTAuth::parseToken();
        $user = $token->authenticate();
        $credentials = $request->only(['current_password', 'new_password', 'confirm_password']);

        // Validazione delle credenziali
        $validator = Validator::make($credentials, [
            'current_password' => 'required',
            'new_password' => 'required|min:8',
            'confirm_password' => 'required|same:new_password',
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()->first()], 400);
        }

        // Verifico se la password attuale è corretta
        if (Hash::check($credentials['current_password'], $user->password)) {
            // Verifico se la nuova password è diversa da quella attuale
            if (!Hash::check($credentials['new_password'], $user->password)) {
                // Cifro la nuova password
                $newHashedPassword = Hash::make($credentials['new_password']);

                // Aggiorno la password nel database
                $user->update(['password' => $newHashedPassword]);

                return response()->json(['message' => 'Password modificata con successo'], 200);
            } else {
            return response()->json(['error' => 'La nuova password deve essere diversa da quella attuale'], 400);
            }
        }
        return response()->json(['error' => 'La password attuale non è corretta'], 400);
    }

    public function updateRole(AuthRequest $request, $id)
    {
        $user = Auth::user();

        if (!$user->hasRole('superadmin')) {
            return response()->json(['error' => 'Non hai i permessi per modificare questo account'], 403);
        }

        $userToUpdate = User::findOrFail($id);

        // Controllo che il ruolo esista nel request
        $role = $request->input('role');
        if (!$role) {
            return response()->json(['error' => 'Ruolo non fornito'], 422);
        }

        // Verifica se il ruolo esiste nel sistema
        if (!Role::where('name', $role)->exists()) {
            return response()->json(['error' => 'Il ruolo specificato non esiste'], 404);
        }

        // Sincronizza il nuovo ruolo
        $userToUpdate->syncRoles([$role]);
        $userToUpdate->update();

        // Recupera i ruoli aggiornati
        $roles = $userToUpdate->roles()->get();

        return response()->json([
            'success' => 'Ruolo aggiornato con successo',
            'user' => $userToUpdate,
            'roles' => $roles
        ]);
    }
}
