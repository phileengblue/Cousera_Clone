<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class AuthRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        $routeName = $this->route()->getActionMethod();

        if($routeName == 'registerUser'){
            return $this->register();
        }

        if($routeName == 'login'){
            return $this->login();
        }

        if($routeName == 'updateRole'){
            return $this->updateRole();
        }


        return match($this->method()){
            'POST' => $this->store(),
            'PUT', 'PATCH' => $this->update(),
            'DELETE' => $this->destroy(),
            default => $this->view()
        };
    }


    public function store()
    {
        return [
            'email' => 'required|string|email',
            'password' => 'required|string',
        ];
    }


    public function register()
    {
        return [
            'firstname' => 'required|string|max:255',
            'lastname' => 'required|string|max:255',
            'birth_date' => 'required|date',
            'gender'=> 'required|string',
            'phone_number'=> 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6|max:32',
        ];
    }

    public function login()
    {
        return [
            'email' => 'required|string|email',
            'password' => 'required|string',
        ];
    }

    public function updateRole()
    {
        return [
            'role' => 'required|string|exists:roles,name',
        ];
    }
}
