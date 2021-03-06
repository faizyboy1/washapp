<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * @mixin IdeHelperBookingStatus
 */
class BookingStatus extends Model
{
    use HasFactory;

    protected $visible = ['id', 'name'];

    public function bookings()
    {
        return $this->hasMany(Booking::class);
    }
}
