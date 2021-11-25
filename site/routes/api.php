<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


Route::post('login', [\App\Http\Controllers\Api\AuthController::class, 'login']);
Route::post('register', [\App\Http\Controllers\Api\AuthController::class, 'register']);
Route::post('verify', [\App\Http\Controllers\Api\AuthController::class, 'verify']);

Route::middleware('auth:sanctum')->group(function () {
    
    Route::post('logout', [\App\Http\Controllers\Api\AuthController::class, 'logout']);
    Route::post('refreshFCM', [\App\Http\Controllers\Api\AuthController::class, 'refreshFCM']);
    Route::get('/user', [\App\Http\Controllers\Api\AuthController::class, 'user']);


    Route::get('services', [\App\Http\Controllers\Api\HomeController::class, 'services']);
    Route::get('coupons/check/{couponName}', [\App\Http\Controllers\Api\HomeController::class, 'checkCoupon']);

    Route::apiResource('cars', \App\Http\Controllers\Api\CarController::class);

    Route::apiResource('addresses', \App\Http\Controllers\Api\AddressController::class);

    Route::get('bookings/slots', [\App\Http\Controllers\Api\BookingController::class, 'slots']);
    Route::apiResource('bookings', \App\Http\Controllers\Api\BookingController::class);


//    Route::get('sync/{version}', function () {
//        return true;
//    });


});


//Route::resource('bookings',BookingController);
