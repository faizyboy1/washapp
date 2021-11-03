<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Address;
use Illuminate\Http\Request;
use function __;
use function auth;
use function response;

class AddressController extends Controller
{

    /**
     * Create the controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->authorizeResource(Address::class, 'address');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return auth()->user()->addresses()->get(['id','name','latitude','longitude']);
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return Address|\Illuminate\Database\Eloquent\Model|\Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate(['name' => 'required','latitude'=>'required','longitude'=>'required']);
        return auth()->user()->addresses()->create($request->all());
    }

    /**
     * Display the specified resource.
     *
     * @param \App\Models\Address $address
     * @return Address
     */
    public function show(Address $address)
    {
        return $address;
    }


    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param \App\Models\Address $address
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request, Address $address)
    {
        $request->validate(['name' => 'required','latitude'=>'required','longitude'=>'required']);
        $address->update($request->all());
        return response()->json(['message' => __("updated successfully")]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Models\Address $address
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy(Address $address)
    {
        $address->delete();
        return response()->json(['message' => __("deleted successfully")]);
    }
}
