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

    // cars
    Route::get('cars', [\App\Http\Controllers\CarController::class, 'index']);
    Route::post('cars', [\App\Http\Controllers\CarController::class, 'store']);
    Route::get('cars/{car}', [\App\Http\Controllers\CarController::class, 'show']);
    Route::patch('cars/{car}', [\App\Http\Controllers\CarController::class, 'update']);
    Route::delete('cars/{car}', [\App\Http\Controllers\CarController::class, 'destroy']);

    //addresses
    Route::get('addresses', [\App\Http\Controllers\AddressController::class, 'index']);
    Route::post('addresses', [\App\Http\Controllers\AddressController::class, 'store']);
    Route::get('addresses/{address}', [\App\Http\Controllers\AddressController::class, 'show']);
    Route::patch('addresses/{address}', [\App\Http\Controllers\AddressController::class, 'update']);
    Route::delete('addresses/{address}', [\App\Http\Controllers\AddressController::class, 'destroy']);


    Route::get('/user', function (Request $request) {
        return $request->user();
    });
});


//Route::resource('bookings',BookingController);
