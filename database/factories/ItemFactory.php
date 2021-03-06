<?php

namespace Database\Factories;

use App\Models\Item;
use App\Models\Store;
use Illuminate\Database\Eloquent\Factories\Factory;

class ItemFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Item::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'title'         => $this->faker->name . "'s Item",
            'price'         => rand(1, 999),
            'description'   => $this->faker->text,
            'store_id'      => Store::factory(),
        ];
    }
}
