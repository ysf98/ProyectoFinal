<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class LoginController extends Controller
{
    public function login(LoginRequest $request){
        $user = User::where('username', $request->username)->first();

        if (!$user ||!Hash::check($request->password, $user->password)){
            return response()->json(['error' => 'Credenciales no válidas'], 401);
        }else{
            $user->api_token = Str::random(60);
            $user->save();
            return response()->json(['token' => $user->api_token,'id' => $user->id, 'username' => $user->username]);
        }
    }

    public function show($id)
    {
        $user= User::find($id);
        return $user;
    }
}
