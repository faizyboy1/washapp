<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Booking;
use App\Models\User;
use Illuminate\Http\Request;

class BookingController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return auth()->user()->bookings;
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

        $booking = Booking::create([
            'washer_id' => User::ofType('washer')->inRandomOrder()->first()->id,
            'client_id' => auth()->user()->id,
            'booking_date' => $request->booking_date,
            'address_id' => $request->address_id,
            'payment_method_id' => $request->payment_method_id,
            'car_type_id' => $request->car_type_id,
            'booking_status_id'=> 1 // @todo needs to be updated based on payment
        ]);

        $booking->services()->attach($request->services);

        $booking->calculateAmounts();
        $booking->save();

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
        return response()->json(['message'=>'deleted successfully']);
    }

    public function reschedule(Request $request, Booking $booking)
    {
        // validate the user gate
        // validate the new date
        // release the old slot

        $booking->update($request->all());
        return $booking->load('services');

    }

    public function setStatus(Booking $booking)
    {

    }

    public function getStatus(Booking $booking)
    {

    }
}
