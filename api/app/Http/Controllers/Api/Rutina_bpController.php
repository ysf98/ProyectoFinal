<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Rutina_bp;
use Illuminate\Http\Request;

class Rutina_bpController extends Controller
{
    public function index()
    {
        $rutinasBp = Rutina_bp::all();
        return $rutinasBp;
    }

    public function show($id)
    {
        $rutinaBp = Rutina_bp::find($id);
        return $rutinaBp;
    }
}
