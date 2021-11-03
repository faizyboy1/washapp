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

    protected $fillable = ['id','name','color','plate_number'];
    public function owner()
    {
        return $this->belongsTo(User::class);
    }

    public function type()
    {
        return $this->belongsTo(CarType::class);
    }


}
