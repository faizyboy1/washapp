<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class CarFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {

        $carsName = ['Toyota Camry 2021','Mazda CX 9', 'Lexus LX 570'];
        return [
            'name'=>$this->faker->randomElement($carsName),
            'color'=>$this->faker->colorName,
            'plate_number'=>$this->faker->randomNumber(4).' '.Str::random(4)
        ];
    }
}
