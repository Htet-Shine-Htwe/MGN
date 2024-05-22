<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class MogousCategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
       $one = $this->loopOver(config('control.test.mogous_count'), config('control.test.categories_count'));
       $two = $this->loopOver(config('control.test.mogous_count'), config('control.test.categories_count'));

       $mogousCategories = array_merge($one, $two);

        DB::table('mogous_categories')->insert($mogousCategories);
    }

    protected function loopOver($mogousCount, $categoriesCount)
    {
        $mogousCategories = [];

        for ($i = 1; $i <= $mogousCount; $i++) {
            $mogousCategories[] = [
                'mogou_id' => $i,
                'category_id' => rand(1, $categoriesCount),
            ];
        }

        return $mogousCategories;
    }
}
