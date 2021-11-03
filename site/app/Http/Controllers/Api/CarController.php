<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Car;
use Illuminate\Http\Request;
use function __;
use function auth;
use function response;

class CarController extends Controller
{

    /**
     * Create the controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->authorizeResource(Car::class, 'car');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return auth()->user()->cars()->get(['id','name','color','plate_number']);
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return Car|\Illuminate\Database\Eloquent\Model|\Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate(['name' => 'required','color'=>'required']);
        return auth()->user()->cars()->create($request->all());
    }

    /**
     * Display the specified resource.
     *
     * @param \App\Models\Car $car
     * @return Car
     */
    public function show(Car $car)
    {
        return $car;
    }


    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param \App\Models\Car $car
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request, Car $car)
    {
        $car->update($request->all());
        return response()->json(['message' => __("updated successfully")]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Models\Car $car
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy(Car $car)
    {
        $car->delete();
        return response()->json(['message' => __("deleted successfully")]);
    }
}
