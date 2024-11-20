<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class FilterRequest extends FormRequest
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

        if($routeName == 'filter'){
            return $this->filter();
        }
    }

    public function filter()
    {
        return [
            'category_id' => 'nullable|array',
            'category_id.*' => 'nullable|numeric',
            'language' => 'nullable|array',
            'language.*' => 'nullable|string',
            'productTypeDescription' => 'nullable|array',
            'productTypeDescription.*' => 'nullable|string',
            'difficulty_level' => 'nullable|array',
            'difficulty_level.*' => 'nullable|string',
            'skill' => 'nullable|array',
            'skill.*' => 'nullable|string',
            'university' => 'nullable|array',
            'university.*' => 'nullable|string',
            'duration_min' => 'nullable|numeric',
            'duration_max' => 'nullable|numeric',
            'duration_unit' => 'nullable|string',
            'keyword' => 'nullable|string',
            'ordering' => 'nullable|string',
        ];
    }
}
