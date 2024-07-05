<?php

namespace App\Http\Controllers\Auth;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Http\JsonResponse;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\Auth\LoginRequest;
use App\Http\Requests\Auth\LogoutRequest;

class AuthenticatedSessionController extends Controller
{
    /**
     * Handle an incoming authentication request.
     */
    public function store(LoginRequest $request): JsonResponse
    {
        // Attempt to authenticate the user
        if (!Auth::attempt(['email' => $request->email, 'password' => $request->password])) {
            return response()->json([
                'status' => 'error',
                'message' => 'Invalid Credentials',
            ], Response::HTTP_UNAUTHORIZED);
        }

        $user   = User::where('email', $request->email)->firstOrFail();
        $token  = $user->createToken('auth_token')->plainTextToken;

        $user->token = $token;
        // Return the token in the response
        return response()->json([
            'message'       => 'Login success',
            'access_token'  => $token,
            'token_type'    => 'Bearer'
        ], Response::HTTP_OK);
    }

    /**
     * Destroy an authenticated session.
     */
    public function destroy(LogoutRequest $request): JsonResponse
    {
        // Get the authenticated user
        $user = $request->user();

        // Check if the user is authenticated and has a valid token
        if ($user) {
            // Revoke the token that was used to authenticate the current request
            $token = $user->currentAccessToken();
            if ($token) {
                $token->delete();
            }
            return response()->json([
                'success' => true,
                'message' => 'Logged out successfully.'
            ]);
        }

        return response()->json([
            'success' => false,
            'message' => 'Invalid token.'
        ], 401);

    }
}
