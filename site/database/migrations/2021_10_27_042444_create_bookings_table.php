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
            $table->foreignIdFor(\App\Models\User::class, 'client_id');
            $table->foreignIdFor(\App\Models\User::class, 'washer_id');
            $table->foreignIdFor(\App\Models\Address::class);
            $table->foreignIdFor(\App\Models\PaymentMethod::class);
            $table->foreignIdFor(\App\Models\Car::class);
            $table->foreignIdFor(\App\Models\BookingStatus::class);
            $table->foreignIdFor(\App\Models\Slot::class);
//            $table->date('booked_at')->nullable();
            $table->boolean('is_paid')->default(0);
            $table->date('started_at')->nullable();
            $table->date('finished_at')->nullable();
            $table->float('amount')->default(0);
            $table->float('discount')->default(0);
            $table->float('vat')->default(0);
            $table->float('total_amount')->default(0);
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
