<?php

namespace Database\Seeders;

use App\Models\Booking;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        User::factory(50)->hasCars(4)->hasAddresses(2)->create();

//Booking::factory(1000)->for()

        User::first()->update(['email'=>'a@a.com','phone' => '966535010102','is_verified'=>true,'role'=>2]);
        User::latest()->first()->update(['email'=>'b@b.com','phone' => '966535010102','is_verified'=>true,'role'=>1]);

        \DB::table('car_types')->insert([
            ['name'=>'SEDAN','created_at'=>now(),'updated_at'=>now()],
            ['name'=>'FAMILY','created_at'=>now(),'updated_at'=>now()],
        ]);

    }
}
