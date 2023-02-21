<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Rutina_bp extends Model
{
    protected $table = 'rutinas_bp';

    protected $fillable = ['nombre'];

    use HasFactory;


}
