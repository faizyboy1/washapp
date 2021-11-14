<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * @mixin IdeHelperService
 */
class Service extends Model
{
    use HasFactory;

    protected $fillable = ['name','price'];
    protected $visible = ['id','name', 'price'];

    public function bookings()
    {
        return $this->belongsToMany(Booking::class);
    }
}