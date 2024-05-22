<?php

namespace Database\Seeders;

use App\Models\SubMogou;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SubMogouSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        for($i = 1; $i <= config('control.test.mogous_count'); $i++) {
            $total_chapter = 5;
            for($j = 1; $j <= $total_chapter; $j++) {
                SubMogou::factory()->create([
                    'mogou_id' => $i,
                    'chapter_number' => $j,
                ]);
            }
        }
    }
}
