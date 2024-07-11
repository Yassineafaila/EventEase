<?php

namespace App\Http\Controllers\API;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class SpeakerController extends Controller
{
    public function index(Request $request)
    {
        // Query to retrieve users who are speakers
        $users = User::join('event_user as eu', 'users.id', '=', 'eu.user_id')
        ->where('eu.role', 'speaker');


        // Execute the query
        $speakers = $users->get();

        return response()->json([
            'success' => true,
            'data' => $speakers,
        ]);
    }


}
