<?php
use App\Traits\DbPartition;
use Database\Seeders\CategorySeeder;
use Database\Seeders\MogouSeeder;
use Database\Seeders\SubscriptionSeeder;
use Database\Seeders\UserSeeder;
use App\Models\User;
use App\Repo\User\Favorite\UserFavoriteRepo;
use App\Services\Partition\TablePartition;

// Group the test
uses()->group('unit', 'tablePartition');

// beforeEach(function() {
//     // Set configuration
//     config(['control.test.mogous_count' => 20]);

//     // Seed the database
//     $this->seed([
//         SubscriptionSeeder::class,
//         UserSeeder::class,
//         CategorySeeder::class,
//         MogouSeeder::class,
//     ]);

//     // Create a user instance
//     $this->individual_user = User::factory()->create();
// });


test("get the limited rotation key collection",function(){
    $available_keys = TablePartition::availableRotationKey();

    $this->assertCount(2,$available_keys);
});

test("get the random rotation key",function(){
    $random_key = TablePartition::getRandomRotationKey();

    $this->assertContains($random_key,TablePartition::availableRotationKey());
});
