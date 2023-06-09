<?php

use App\Http\Controllers\Api\RutinaController;
use App\Http\Controllers\Api\RegisterController;
use App\Http\Controllers\Api\LoginController;
use App\Http\Controllers\Api\Rutina_amController;
use App\Http\Controllers\Api\Rutina_bpController;
use App\Http\Controllers\Api\ExerciseController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::controller(RutinaController::class)->group(function (){
    Route::get('/rutinas', 'index');
    Route::post('/rutina', 'store');
    Route::get('/rutina/{id}', 'show');
    Route::get('/rutina/{userId}/{rutinaId}', 'userRoutine');

    Route::get('/rutinasuser/{id}', 'showusers');
    Route::get('/users/{userId}/routines/{routineId}','rutinaej');
    Route::put('/rutina/{id}', 'update');
    Route::delete('/rutina/{id}', 'destroy');
});

Route::controller(Rutina_amController::class)->group(function (){
    Route::get('/rutinasAm', 'index');
    Route::get('/rutinaAm/{id}', 'show');
});

Route::controller(Rutina_bpController::class)->group(function (){
    Route::get('/rutinasBp', 'index');
    Route::get('/rutinaBp/{id}', 'show');
});

Route::controller(RegisterController::class)->group(function (){
    Route::post('/register', 'register');
    Route::get('/register/{id}', 'show');

});

Route::controller(ExerciseController::class)->group(function (){
    Route::get('/exercises', 'index');
});

Route::controller(LoginController::class)->group(function (){
    Route::post('/login', 'login');
    Route::get('/login/{id}', 'show');

});






