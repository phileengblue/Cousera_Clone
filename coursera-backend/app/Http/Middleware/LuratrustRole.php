<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;


class LuratrustRole
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle($request, Closure $next, $role)
    {
        if (!Auth::check()) {
            info('Utente non autenticato.');
            return redirect('/login');
        }

        $user = Auth::user();
        info('Utente autenticato:', ['user' => $user]);

        if (!$user->hasRole($role)) {
            info('Utente non autorizzato:', ['role' => $role]);
            return response()->json(['message' => 'Utente non autorizzato'], 403);
        }

        return $next($request);
    }
}
