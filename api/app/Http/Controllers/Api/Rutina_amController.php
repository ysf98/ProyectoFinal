<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Rutina_am;
use Illuminate\Http\Request;

class Rutina_amController extends Controller
{
    public function index()
    {
        $rutinasAm = Rutina_am::all();
        return $rutinasAm;
    }

    public function show($id)
    {
        $rutinaAm = Rutina_am::find($id);
        return $rutinaAm;
    }
}
