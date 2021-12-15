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


    protected $fillable = ['client_id', 'washer_id', 'address_id', 'payment_method_id', 'car_id', 'booking_status_id', 'booking_date', 'amount', 'vat', 'total_amount', 'note', 'discount',
        'slot_id'];

    protected static function booted()
    {
        //cannot be done, as we need to attach services
//        static::creating(function ($book) {
//            $book->calculateAmounts();
//        });
    }

    protected $dates = ['booking_date'];

    protected $with = ['payment_method', 'status', 'services', 'slot', 'car','client'];

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
        return $this->belongsTo(BookingStatus::class, 'booking_status_id', 'id');
    }

    public function slot()
    {
        return $this->belongsTo(Slot::class);
    }

    public function calculateAmounts($couponDiscount = 0)
    {
        $priceType = $this->car->car_type_id == 2 ? 'family' : 'sedan';
        $amount = $this->services()->sum("{$priceType}_price");

        if ($couponDiscount) {
            $this->discount = $amount * ($couponDiscount / 100);
        }
        $this->amount = $amount - $this->discount;

        $this->vat = $this->amount * 0.15;

        $this->total_amount = $this->amount + $this->vat;
        return $this;
    }

    public function services()
    {
        return $this->belongsToMany(Service::class);
    }

    public function car()
    {
        return $this->belongsTo(Car::class);
    }
}
