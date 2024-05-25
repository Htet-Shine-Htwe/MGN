<?php

namespace Database\Factories;

use App\Enum\MogousStatus;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;
/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Mogou>
 */
class MogouFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $title = $this->faker->sentence(4).' '.$this->faker->sentence(4);
        return [
            'title' => $title,
            'slug' => Str::slug($title),
            'description' => $this->faker->paragraph(4),
            'author' => $this->faker->name,
            'cover' => $this->faker->imageUrl(),
            'status' => MogousStatus::getRandomStatus(),
            'release_year' => $this->faker->year,
            'released_at' => $this->faker->dateTimeThisYear,
        ];
    }
}
