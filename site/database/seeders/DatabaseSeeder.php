<?php

namespace Database\Seeders;

use App\Models\Booking;
use App\Models\PaymentMethod;
use App\Models\Slot;
use App\Models\User;
use App\Models\Vacancy;
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
        $this->call([
            CarTypeSeeder::class,
            BookingStatusSeeder::class,
            PaymentMethodSeeder::class,
            ServiceSeeder::class,
            SettingSeeder::class,
            SlotSeeder::class,
            VacancySeeder::class,
            UserSeeder::class
        ]);


    }
}
