<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class AddressFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {

        return [
            'name'=>$this->faker->words(3,true),
            'latitude'=>$this->faker->latitude,
            'longitude'=>$this->faker->longitude
        ];
    }
}
