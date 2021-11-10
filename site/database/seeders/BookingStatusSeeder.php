<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class BookingStatusSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \DB::table('booking_statuses')->insert([
            ['name' => 'POSTED', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'CONFIRMED', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'CANCELLED', 'created_at' => now(), 'updated_at' => now()],
        ]);
    }
}

