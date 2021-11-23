<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * @mixin IdeHelperPaymentMethod
 */
class PaymentMethod extends Model
{
    use HasFactory;

    protected $fillable = ['name'];

    protected $visible = ['id', 'name'];

    public function bookings()
    {
        return $this->hasMany(Booking::class);
    }
}
