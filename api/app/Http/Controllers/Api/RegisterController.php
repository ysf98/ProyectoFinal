<?php

namespace App\Http\Controllers\Api;

use App\Http\Requests\RegisterRequest;
use App\Models\User;
use App\Http\Controllers\Controller;


class RegisterController extends Controller
{

    public function register (RegisterRequest $request){

        $user = User::create($request->validated());
    }

    public function show($id)
    {
        $user= User::find($id);
        return $user;
    }
}
