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
            ['name' => 'Raghwa Regular', 'price'=>39,'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Raghwa Plus','price'=>47, 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Raghwa VIP','price'=>50, 'created_at' => now(), 'updated_at' => now()],

            ['name' => 'Raghwa Freshener', 'price'=>5,'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Raghwa Tissue','price'=>15, 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Raghwa Mats Covering','price'=>10, 'created_at' => now(), 'updated_at' => now()],


        ]);
    }
}
