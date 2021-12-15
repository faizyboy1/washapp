<?php

namespace Database\Factories;

use App\Models\Booking;
use App\Models\BookingStatus;
use App\Models\Car;
use App\Models\CarType;
use App\Models\PaymentMethod;
use App\Models\Service;
use App\Models\Slot;
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
                return optional(User::where('role_id', 1)->inRandomOrder()->first())->id ?? 2;
            },
            'client_id' => function (array $attributes) {
                return optional(User::where('role_id', 0)->inRandomOrder()->first())->id;
            },
            'address_id' => function (array $attributes) {
                $user = User::ofType('client')->inRandomOrder()->first();
                return optional($user->addresses()->inRandomOrder()->first())->id;
            },
            'payment_method_id' => function (array $attributes) {
                return PaymentMethod::inRandomOrder()->first()->id;
            },
            'car_id' => function (array $attributes) {
                return Car::where('user_id', $attributes['client_id'])->inRandomOrder()->first()->id;
            },
            'slot_id' => function (array $attributes) {
                return Slot::inRandomOrder()->first()->id;
            },
            'booking_status_id' => function (array $attributes) {
                return BookingStatus::inRandomOrder()->first()->id;
            },
//            'booked_at' => $this->faker->dateTimeBetween('now', '+7 days'),

            'note' => $this->faker->sentence(50)
        ];
    }

    public function configure()
    {
        return $this->afterCreating(function (Booking $booking) {

            $booking->services()->attach(Service::where('id', random_int(1, 2))->first());

            if (random_int(0, 1))
                $booking->services()->attach(Service::where('id', '>', 2)->take(random_int(1, 3))->get());

            $booking->calculateAmounts()->save();
        });
    }

}
