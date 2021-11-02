<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * @mixin IdeHelperBooking
 */
class Booking extends Model
{
    use HasFactory;

    public function washer()
    {
        return $this->belongsTo(User::class,'washer_id');
    }

    public function client()
    {
        return $this->belongsTo(User::class,'client_id');
    }
}
