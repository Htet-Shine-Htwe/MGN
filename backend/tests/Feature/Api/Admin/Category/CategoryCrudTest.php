<?php

use Database\Seeders\CategorySeeder;
use Database\Seeders\UserSeeder;
use Illuminate\Support\Facades\Schema;
use Tests\Support\UserAuthenticated;


uses()->group('admin','api','admin-category');
uses(UserAuthenticated::class);

beforeEach(function(){
    config(['control.test.users_count' => 10]);

    $this->seed([
        CategorySeeder::class
    ]);
    $this->setupAdmin();

    $this->categories = $this->authenticatedAdmin()->getJson(route('api.admin.categories.index'));

});

test("category table exists",function(){
    $this->assertTrue(Schema::hasTable('categories'));
});

test("check category have expected count 10",function(){

    $this->categories->assertOk();

    $this->categories->assertJsonCount(10,'categories.data');
});
