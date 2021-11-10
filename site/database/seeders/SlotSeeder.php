<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class SlotSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \DB::table('slots')->insert([
            ['name'=>'08:00 AM','created_at'=>now(),'updated_at'=>now()],
            ['name'=>'09:15 AM','created_at'=>now(),'updated_at'=>now()],
            ['name'=>'10:30 AM','created_at'=>now(),'updated_at'=>now()],
            ['name'=>'01:00 PM','created_at'=>now(),'updated_at'=>now()],
            ['name'=>'02:15 PM','created_at'=>now(),'updated_at'=>now()],
            ['name'=>'3:30 PM','created_at'=>now(),'updated_at'=>now()],
            ['name'=>'4:15 PM','created_at'=>now(),'updated_at'=>now()],
            ['name'=>'5:30 PM','created_at'=>now(),'updated_at'=>now()],
            ['name'=>'7:00 PM','created_at'=>now(),'updated_at'=>now()],
            ['name'=>'8:15 PM','created_at'=>now(),'updated_at'=>now()],
            ['name'=>'9:30 PM','created_at'=>now(),'updated_at'=>now()],
        ]);
    }
}
