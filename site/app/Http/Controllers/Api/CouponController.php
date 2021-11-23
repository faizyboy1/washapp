<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\BookingResource;
use App\Models\Booking;
use App\Models\Coupon;
use App\Models\Slot;
use App\Models\User;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;

class CouponController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function check($couponName)
    {
        $coupon = Coupon::whereName($couponName)->first();
        return $coupon ? $coupon->discount : __('Sorry, the code is expired or invalid');
    }


}
