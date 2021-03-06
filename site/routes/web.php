<?php

use App\Http\Livewire\UserTable;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('home');
});


Route::middleware('auth')->group(function () {
    Route::get('users', UserTable::class)->name('users');
    Route::get('bookings', \App\Http\Livewire\BookingsTable::class)->name('bookings');
    Route::get('coupons', \App\Http\Livewire\CouponTable::class)->name('coupons');
//    Route::resource('bookings', \App\Http\Controllers\BookingController::class);
});

Route::middleware(['auth:sanctum', 'verified'])->get('/dashboard', function () {

    return view('dashboard');
})->name('dashboard');
