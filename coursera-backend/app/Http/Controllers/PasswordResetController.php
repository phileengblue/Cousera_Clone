<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Models\PasswordReset;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;

class PasswordResetController extends Controller
{
    public function forgetPassword(Request $request)
    {
        try {
            $user = User::where('email', $request->email)->first();

            if ($user) {
                // Controllo se esiste già un record per l'utente
                $existingResetData = PasswordReset::where('email', $request->email)->first();

                if ($existingResetData) {
                    // Se esiste, aggiorno il token e la data di creazione
                    $token = Str::random(40);
                    $existingResetData->update([
                        'token' => $token,
                        'created_at' => now(),
                    ]);
                } else {
                    // Se non esiste, crea un nuovo record
                    $token = Str::random(40);
                    $domain = URL::to('http://localhost:4200/');
                    $url = $domain . 'reset-password/' . $token;

                    $data['url'] = $url;
                    $data['email'] = $request->email;
                    $data['title'] = "Password Reset";
                    $data['body'] = "Clicca qua sotto per resettare la tua password.";

                    Mail::send('forgetPasswordMail', ['data' => $data], function ($message) use ($data) {
                        $message->to($data['email'])->subject($data['title']);
                    });

                    $datetime = Carbon::now()->format('Y-m-d H:i:s');
                    PasswordReset::create([
                        'email' => $request->email,
                        'token' => $token,
                        'created_at' => $datetime,
                    ]);
                }

                $response = [
                    'success' => true,
                    'msg' => 'Controlla la tua mail per resettare la tua password.',
                    'token' => $token
                ];
                return response()->json($response);
            } else {
                return response()->json(['success' => false, 'msg' => 'Utente non trovato!']);
            }
        } catch (\Exception $e) {
            return response()->json(['success' => false, 'msg' => $e->getMessage()]);
        }
    }

    
    public function resetPassword(Request $request)
    {
        $resetData = PasswordReset::where('token', $request->token)->first();
        $credentials = $request->only(['password', 'confirm_password']);
        if ($resetData) {
            $user = User::where('email', (string)$resetData->email)->first();

            if ($user) {
                $validator = Validator::make($credentials, [
                    'password' => 'required|min:8',
                    'confirm_password' => 'required|same:password',
                ]);
            
                if ($validator->fails()) {
                    return response()->json(['error' => $validator->errors()->first()], 400);
                }

                $user->password = Hash::make($request->password);
                $user->save();

                PasswordReset::where('email', (string)$resetData->email)->delete();

                return response()->json(['msg' => 'La tua password è stata cambiata con successo.']);
            } else {
                return response()->json(['error' => 'Utente non trovato'], 200);
            }
        } else {
            return response()->json(['error' => 'Token non valido'], 200);
        }
    }
}
