<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * @mixin IdeHelperSlot
 */
class Slot extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'slot_date', 'capacity'];
    protected $visible = ['name', 'slot_date'];

    public function bookings()
    {
        return $this->hasMany(Booking::class);
    }
}
