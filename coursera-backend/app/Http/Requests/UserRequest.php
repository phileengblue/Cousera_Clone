<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserRequest extends FormRequest
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

        if($routeName == 'addProfessor'){
            return $this->addProfessor();
        }

        return match($this->method()){
            '' => $this->store(),
            'POST', 'PATCH' => $this->update(),
            'DELETE' => $this->destroy(),
            default => $this->view()
        };
    }

    public function addProfessor()
    {
        return [
            'user_id' => 'required|numeric|exists:users,id',
            'course_id'=> 'required|numeric|exists:courses,id'
        ];
    }

    public function update(){

        return [
            'phone_number' => 'nullable|string|max:255',
            'file_img' => 'nullable|image|mimes:jpeg,png,jpg,svg',
            /*'current_password' => 'required',
            'new_password' => 'required|min:8',
            'confirm_password' => 'required|same:new_password',*/
        ];
    }
}
