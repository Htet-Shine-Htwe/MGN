<?php

namespace Database\Seeders;

use App\Models\Mogou;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MogouSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Mogou::factory()->count(config('control.test.mogous_count'))->create();
    }
}

