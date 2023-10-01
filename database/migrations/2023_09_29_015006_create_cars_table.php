<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('cars', function (Blueprint $table) {
            $table->id();
            $table->string('model');
            $table->string('image');
            $table->decimal('price');
            $table->string('body_type');
            $table->string('transmission'); 
            $table->string('number_of_seats');
            $table->string('segment');
            $table->string('introduction');
            $table->string('end');
            $table->string('fuel_type');
            $table->string('cylinders');
            $table->integer('mileage'); 
            $table->foreignId('brand_id')->constrained('brands');
            $table->foreignId('user_id')->constrained('users');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('cars');
    }
};
