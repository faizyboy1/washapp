<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * @mixin IdeHelperCar
 */
class Car extends Model
{
    use HasFactory;

    protected $fillable = ['id', 'name', 'color', 'plate_number', 'car_type_id'];

    protected $visible = ['id', 'name', 'color', 'plate_number', 'car_type_id'];

    public function owner()
    {
        return $this->belongsTo(User::class);
    }

    public function type()
    {
        return $this->belongsTo(CarType::class);
    }

    public function bookings()
    {
        return $this->hasMany(Booking::class);
    }


}
