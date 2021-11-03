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
            $table->enum('car_type',['FAMILY','SEDAN']);
            $table->enum('payment_method',['CASH','CARD']);
            $table->enum('status',['POSTED','COMPLETED','CANCELLED'])->nullable();
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
