<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBookingsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('bookings', function (Blueprint $table) {
            $table->id()->from(1000);
            $table->foreignIdFor(\App\Models\User::class,'client_id');
            $table->foreignIdFor(\App\Models\User::class,'washer_id');
            $table->foreignIdFor(\App\Models\Address::class);
            $table->set('car_type',['family','small']);
            $table->set('payment_method',['cash','card']);
            $table->set('status',['posted','completed','cancelled'])->nullable();
            $table->float('amount');
            $table->text('note')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('bookings');
    }
}
