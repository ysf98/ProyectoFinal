<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Rutina;
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

        $rutina = new Rutina();
        $rutina->dia = $request->dia;
        $rutina->Ejercicio_1 = $request->Ejercicio_1;
        $rutina->Ejercicio_2 = $request->Ejercicio_2;
        $rutina->Ejercicio_3 = $request->Ejercicio_3;
        $rutina->Ejercicio_4 = $request->Ejercicio_4;
        $rutina->Ejercicio_5 = $request->Ejercicio_5;
        $rutina->Ejercicio_6 = $request->Ejercicio_6;
        $rutina->Ejercicio_7 = $request->Ejercicio_7;
        $rutina->Ejercicio_8 = $request->Ejercicio_8;
        $rutina->user_id = $request->user_id;

        $rutina->save();
    }

    public function show($id)
    {
        $rutina= Rutina::find($id);
        return $rutina;
    }


    public function showusers($id){
        $user = User::find($id);
        $rutina = $user->rutinas;
        return $rutina;
    }


    public function update(Request $request, $id)
    {
        $rutina = Rutina::findOrFail($request->id);
        $rutina->dia = $request->dia;
        $rutina->Ejercicio_1 = $request->Ejercicio_1;
        $rutina->Ejercicio_2 = $request->Ejercicio_2;
        $rutina->Ejercicio_3 = $request->Ejercicio_3;
        $rutina->Ejercicio_4 = $request->Ejercicio_4;
        $rutina->Ejercicio_5 = $request->Ejercicio_5;
        $rutina->Ejercicio_6 = $request->Ejercicio_6;
        $rutina->Ejercicio_7 = $request->Ejercicio_7;
        $rutina->Ejercicio_8 = $request->Ejercicio_8;
        $rutina->save();
        return $rutina;
    }

    public function destroy($id)
    {
        $rutina = Rutina::destroy($id);
        return $rutina;
    }
}
