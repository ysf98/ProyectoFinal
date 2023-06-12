<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Rutina;
use App\Models\Exercise;

use App\Models\User;
use Illuminate\Http\Request;


class RutinaController extends Controller
{
    /*
    public function __construct()
    {
        $this->middleware('auth:api');
    }

    */

    public function index()
    {
        $rutinas = Rutina::all();
        return $rutinas;
    }

    public function store(Request $request)
    {

        // $exercise_id;


        $rutina = new Rutina();
        $rutina->dia = $request->dia;
        $rutina->user_id = $request->user_id;

        $rutina->save();
        $exercise_id = $request->input('exercise_id');

        $rutina->exercises()->attach($exercise_id);
        // Retornar una respuesta exitosa
        return response()->json(['message' => 'Rutina creada con éxito'], 201);
    }

    public function show($id)
    {
        $rutina= Rutina::find($id);
        $rutina->load('exercises');
        return $rutina;
    }


    public function showusers($id){
        $user = User::find($id);
        $rutina = $user->rutinas;
        return $rutina;
    }

    // Obtener una rutina específica de un usuario
    public function userRoutine($userId, $rutinaId)
    {
        $rutina = Rutina::where('user_id', $userId)->findOrFail($rutinaId);
        $rutina->load('exercises');
        return $rutina;
    }


    public function update(Request $request, $id)
    {
        $rutina = Rutina::findOrFail($request->id);
        $rutina->dia = $request->dia;

         // Actualizar los ejercicios asociados a la rutina
         $exerciseIds = $request->input('exercises');
         $exercises = Exercise::whereIn('id', $exerciseIds)->get();

         $rutina->exercises()->sync($exercises);
        $rutina->save();
        return $rutina;
    }

    public function destroy($id)
    {
        $rutina = Rutina::destroy($id);
        return $rutina;
    }
}
