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


    protected $fillable = ['client_id', 'washer_id', 'address_id', 'payment_method_id', 'car_type_id', 'booking_status_id', 'booking_date', 'amount', 'total_amount', 'note'];

    protected $dates = ['booking_date'];

    protected $with = ['payment_method', 'status', 'client', 'washer'];

    public function washer()
    {
        return $this->belongsTo(User::class, 'washer_id');
    }

    public function client()
    {
        return $this->belongsTo(User::class, 'client_id');
    }

    public function payment_method()
    {
        return $this->belongsTo(PaymentMethod::class);
    }

    public function status()
    {
        return $this->belongsTo(BookingStatus::class);
    }

    public function slot()
    {
        return $this->belongsTo(Slot::class);
    }

    public function calculateAmounts()
    {
        $this->total = $this->services()->sum('price');
        $this->vat = $this->total * 0.15;
        $this->total_amount = $this->amount + $this->vat;

    }

    public function services()
    {
        return $this->belongsToMany(Service::class);
    }
}
