<?php

namespace Database\Seeders;

use App\Models\Slot;
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
        Slot::factory(200)->create();
//        \DB::table('slots')->insert([
////            ['name'=>'08:00 AM','created_at'=>now(),'updated_at'=>now()],
//        //todo 09:00 - 10:00 PM
//            ['name'=>'09:00 AM','created_at'=>now(),'updated_at'=>now()],
//            ['name'=>'10:15 AM','created_at'=>now(),'updated_at'=>now()],
//            ['name'=>'11:30 PM','created_at'=>now(),'updated_at'=>now()],
//            ['name'=>'12:45 PM','created_at'=>now(),'updated_at'=>now()],
////            ['name'=>'02:00 PM','created_at'=>now(),'updated_at'=>now()],
//            ['name'=>'02:00 PM','created_at'=>now(),'updated_at'=>now()],
//            ['name'=>'03:15 PM','created_at'=>now(),'updated_at'=>now()],
//            ['name'=>'04:30 PM','created_at'=>now(),'updated_at'=>now()],
//            ['name'=>'05:45 PM','created_at'=>now(),'updated_at'=>now()],
//            ['name'=>'07:00 PM','created_at'=>now(),'updated_at'=>now()],
//            ['name'=>'08:15 PM','created_at'=>now(),'updated_at'=>now()],
//            ['name'=>'09:30 PM','created_at'=>now(),'updated_at'=>now()],
//        ]);
    }
}
