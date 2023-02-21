<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Rutina_am extends Model
{
    protected $table = 'rutinas_am';

    protected $fillable = ['nombre'];
    use HasFactory;
}
