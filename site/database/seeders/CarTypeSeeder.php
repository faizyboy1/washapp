<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class CarTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \DB::table('car_types')->insert([
            ['name' => 'SEDAN', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'FAMILY', 'created_at' => now(), 'updated_at' => now()],
        ]);
    }
}

