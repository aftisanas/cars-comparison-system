<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Car extends Model
{
    use HasFactory;

    protected $fillable = [
        'make',
        'model',
        'year',
        'description',
        'price',
        'fuel_type',
        'transmission',
        'mileage',
        'engine_size',
        'body_type',
        'color',
        'image',
        'user_id',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function accessories()
    {
        return $this->hasMany(Accessory::class);
    }

}
