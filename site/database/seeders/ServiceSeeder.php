<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class ServiceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \DB::table('services')->insert([
            ['name' => 'Raghwa Regular', 'sedan_price' => 39, 'family_price' => 49, 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Raghwa Plus', 'sedan_price' => 47, 'family_price' => 59, 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Raghwa VIP', 'sedan_price' => 50, 'family_price' => 69, 'created_at' => now(), 'updated_at' => now()],

            ['name' => 'Raghwa Freshener', 'sedan_price' => 5, 'family_price' => 5, 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Raghwa Tissue', 'sedan_price' => 15, 'family_price' => 15, 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Raghwa Mats Covering', 'sedan_price' => 10, 'family_price' => 10, 'created_at' => now(), 'updated_at' => now()],
        ]);
    }
}
