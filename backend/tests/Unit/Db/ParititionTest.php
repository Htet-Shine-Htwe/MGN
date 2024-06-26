<?php
use Database\Seeders\CategorySeeder;
use Database\Seeders\MogouSeeder;
use Database\Seeders\SubscriptionSeeder;
use Database\Seeders\UserSeeder;
use App\Models\User;
use App\Repo\User\Favorite\UserFavoriteRepo;

// Group the test
uses()->group('unit', 'user-favorite-repo');

beforeEach(function() {
    // Set configuration
    config(['control.test.mogous_count' => 20]);

    // Seed the database
    $this->seed([
        SubscriptionSeeder::class,
        UserSeeder::class,
        CategorySeeder::class,
        MogouSeeder::class,
    ]);

    // Create a user instance
    $this->individual_user = User::factory()->create();
});
