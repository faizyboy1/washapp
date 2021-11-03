<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class BookingFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [

            'washer_id' => function (array $attributes) {
                return User::where('role',1)->inRandomOrder()->first()->id;
            },

            'washer_id' => function (array $attributes) {
                return User::where('role',1)->inRandomOrder()->first()->id;
            },
            'client_id' => function (array $attributes) {
                return User::where('role',0)->inRandomOrder()->first()->id;
            },
        ];
    }
}
