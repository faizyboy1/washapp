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

class BookingController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function client($user)
    {
        $columns = ['payment_method_id', 'car_id', 'booking_status_id', 'booked_at', 'amount', 'vat', 'total_amount', 'note', 'slot_id'];
        return $user->clientBookings()->get($columns)->groupBy('booking_status_id');
    }

    public function washer()
    {
        return 'x';
    }

    public function index()
    {
        $user = auth()->user();

        return $user->is_washer ? $this->washer($user) : $this->client($user);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        // validate the user gate (can book)
        // validate the slot availability
        // book the
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return Booking|\Illuminate\Database\Eloquent\Model|\Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        $data = [
            'washer_id' => User::ofType('washer')->inRandomOrder()->first()->id,
            'client_id' => auth()->user()->id,
            'booked_at' => $request->booked_at,
            'address_id' => $request->address_id,
            'payment_method_id' => $request->payment_method_id,
            'car_id' => $request->car_id,
            'booking_status_id' => 1, // @todo needs to be updated based on payment
            'slot_id' => $request->slot_id
        ];
        // check if slot is avalible otherwise create a new one
        // set the default booking cretiria
        // booked no


        $booking = Booking::create($data);
        $booking->services()->attach($request->services);


        $couponDiscount = $request->coupon ?
            optional(Coupon::whereName($request->coupon)->first())->discount ?? 0
            : 0;

        $booking->calculateAmounts($couponDiscount);

        $booking->save();
        $booking->slot()->increment('booked_slots');
        return $booking->load('services');
    }

    /**
     * Display the specified resource.
     *
     * @param \App\Models\Booking $booking
     * @return \Illuminate\Http\Response
     */
    public function show(Booking $booking)
    {
        return $booking->load('services');
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param \App\Models\Booking $booking
     * @return \Illuminate\Http\Response
     */
    public function edit(Booking $booking)
    {

    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param \App\Models\Booking $booking
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Booking $booking)
    {
        // validate the user gate
        // validate the new date
        // release the old slot

        $booking->update($request->all());
        return $booking->load('services');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Models\Booking $booking
     * @return \Illuminate\Http\Response
     */
    public function destroy(Booking $booking)
    {
        $booking->services()->delete();
        $booking->delete();
        return response()->json(['message' => 'deleted successfully']);
    }

    public function reschedule(Request $request, Booking $booking)
    {
        // validate the user gate
        // validate the new date
        // release the old slot
        $booking->slot()->decrement(); //old
        $booking->update($request->all());
        $booking->slot()->increment();//new
        return $booking->load('services');

    }

    public function setStatus(Booking $booking)
    {

    }

    public function getStatus(Booking $booking)
    {

    }

    public function slots()
    {

        return ['x' => Slot::select(['name', 'slot_date'])->whereColumn('capacity', '>', 'booked_slots')
            ->whereDate('slot_date', '>=', now())
            ->whereDate('slot_date', '<=', now()->addDays(7))
            ->get()->groupBy('slot_date')];


    }
}
