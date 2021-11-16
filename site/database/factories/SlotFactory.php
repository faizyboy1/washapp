<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class SlotFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $names =['09:00 AM'
            ,'10:15 AM'
            ,'11:30 PM'
            ,'12:45 PM'
            ,'02:00 PM'
            ,'03:15 PM'
            ,'04:30 PM'
            ,'05:45 PM'
            ,'07:00 PM'
            ,'08:15 PM'
            ,'09:30 PM'];

        return [
            'name'=>$this->faker->randomElement($names),
            'slot_date'=>$this->faker->dateTimeBetween('now', '+20 days'),
            'booked_slots'=>$this->faker->numberBetween(0, 5),
            'capacity'=>5
        ];
    }
}
