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

    protected $fillable = ['name', 'family_price', 'sedan_price'];
    protected $visible = ['id', 'name', 'family_price', 'sedan_price'];

    public function bookings()
    {
        return $this->belongsToMany(Booking::class);
    }
}
