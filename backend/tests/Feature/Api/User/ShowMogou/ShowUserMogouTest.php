<?php

use App\Models\Mogou;
use App\Models\SubMogou;
use Database\Seeders\CategorySeeder;
use Database\Seeders\MogouSeeder;
use Database\Seeders\SubscriptionSeeder;
use Database\Seeders\UserSeeder;
use Tests\Support\UserAuthenticated;

// Group the test
uses()->group('user','api','show-user-mogou');
uses(UserAuthenticated::class);

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

    $this->setupUser();

});

test("show mogou can be found with slug", function() {
    // Assuming 'some-mogou-slug' is a valid slug you want to test

    $mogou = Mogou::factory()->create([
        'rotation_key' => "alpha"
    ]);

    $subMogou = new SubMogou();

    $subMogou->setTable("alpha_sub_mogous");

    SubMogou::setTable('alpha_sub_mogous')->factory()->create([
        'mogou_id' => $mogou->id
    ]);



    dd($subMogou->get());

    $subMogou->factory()->create([
        'mogou_id' => $mogou->id
    ]);

    $subMogou->factory()->create([
        'mogou_id' => $mogou->id
    ]);

    $response = $this->getJson(route('api.users.mogous.show', [
        'mogou' => $mogou->slug
    ]));

    dd($response->json());
});
