<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CourseRequest extends FormRequest
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
            'title' => 'required|string|max:255',
            'description' => 'required|string|max:255',
            'language' => 'required|string|max:255',
            'productTypeDescription'=> 'required|string',
            'difficulty_level'=> 'required|string|max:255',
            'duration' => 'required|numeric',
            'duration_unit' => 'required|string',
            'price' => 'required|numeric',
            'start_date' => 'required|date',
            'parent_id' => 'nullable|numeric',
            'category_id' => 'required|numeric',
            'file_img' => 'nullable|image|mimes:jpg,jpeg,png,svg',
        ];
    }

    public function update()
    {
        return [
            'title' => 'required|string|max:255',
            'description' => 'required|string|max:255',
            'language' => 'required|string|max:255',
            'productTypeDescription'=> 'required|string',
            'difficulty_level'=> 'required|string|max:255',
            'duration' => 'required|numeric',
            'duration_unit' => 'required|string',
            'price' => 'required|numeric',
            'start_date' => 'required|date',
            'category_id' => 'required|numeric',
            'file_img' => 'nullable|image|mimes:jpg,jpeg,png,svg',
        ];
    }
}
