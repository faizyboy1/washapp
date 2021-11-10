<?php

namespace Database\Seeders;

use App\Models\Booking;
use App\Models\User;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        // washer
        User::factory(5)->create(['role_id'=>1]);


// client
        User::factory(50)
            ->hasCars(4)
            ->hasAddresses(3)
            ->hasClientBookings(10)
            ->create();


//Booking::factory(1000)->for()

        User::first()->update(['email' => 'a@a.com', 'phone' => '966535010102', 'is_verified' => true, 'role_id' => 2]);
        User::latest()->first()->update(['email' => 'b@b.com', 'phone' => '966535010103', 'is_verified' => true, 'role_id' => 1]);
    }
}
