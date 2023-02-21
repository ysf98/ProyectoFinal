<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('rutinas_bp', function (Blueprint $table) {
            $table->id();
            $table->string('nombre')->nullable();
            $table->string('Ejercicio_1')->nullable();
            $table->string('Ejercicio_2')->nullable();
            $table->string('Ejercicio_3')->nullable();
            $table->string('Ejercicio_4')->nullable();
            $table->string('Ejercicio_5')->nullable();
            $table->string('Ejercicio_6')->nullable();
            $table->string('Ejercicio_7')->nullable();
            $table->string('Ejercicio_8')->nullable();
            $table->timestamps();

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
       //

    }
};
