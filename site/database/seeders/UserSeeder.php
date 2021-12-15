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

        $user = User::factory()
            ->hasCars(4)
            ->hasAddresses(3)
            ->hasClientBookings(50)
            ->create();

        // washer
        User::factory(2)->create(['role_id' => 1]);


// client
        User::factory(50)
            ->hasCars(4)
            ->hasAddresses(3)
            ->hasClientBookings(10)
            ->create();


//Booking::factory(1000)->for()

        User::first()->update(['email' => 'a@a.com', 'phone' => '966535010102', 'is_verified' => true, 'role_id' => 0, 'remember_token' => 'e6UfBDAvJb']);

        User::find(2)->update(['email' => 'b@b.com', 'phone' => '966535010103', 'is_verified' => true, 'role_id' => 1]);

        \DB::table('personal_access_tokens')->insert([
            'tokenable_type' => 'App\\Models\\User',
            'tokenable_id' => 1,
            'name' => 'mobileApp',
            'token' => '6c56209e25670aada96c53373c9f031e336c1077a5860b3efdda6439f97488c1',
            'abilities' => '["*"]',
            'created_at' => now(),
            'updated_at' => now()
        ]);


    }
}
