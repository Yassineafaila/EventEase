<?php

namespace App\Http\Requests;

use Illuminate\Support\Facades\Auth;
use Illuminate\Foundation\Http\FormRequest;

class EventRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return Auth::check();
    }
    public function prepareForValidation(){
        if(Auth::check()){
            $this->merge(['organizer_id' => Auth::id()]);
        }
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => ['required', 'max:255'],
            'description' => ['required'],
            'seats' => ['required', 'integer'],
            'location' => ['required'],
            'start_time' => ['required', 'date_format:Y-m-d H:i:s'],
            'end_time' => ['required', 'date_format:Y-m-d H:i:s', 'after:start_time'],
            'organizer_id' => ['required', 'exists:users,id']
        ];
    }
    public function messages():array{
        return [
            'name.required' => 'A Name Is Required',
            'description.required' => 'A Description Is Required',
            'seats.number' => 'A Seats Need To Be A Number',
            'loaction.required' => 'A Location Is Required',
            'start_time.required' => 'A Started Time For The Event Is Required',
            'end_time.required' => 'A Ending Time For The Event Is Required'
        ];
    }
}
