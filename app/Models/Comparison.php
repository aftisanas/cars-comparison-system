<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Comparison extends Model
{
    use HasFactory;

    protected $fillable = [
        'id',
        'first_car',
        'second_car',
        'third_car',
        'fourth_car',
        'user_id',
    ];

    public function cars()
    {
        return $this->hasMany(Car::class);
    }
}
