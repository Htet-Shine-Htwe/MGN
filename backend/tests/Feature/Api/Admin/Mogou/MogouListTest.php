<?php

use Database\Seeders\CategorySeeder;
use Database\Seeders\MogousCategorySeeder;
use Database\Seeders\MogouSeeder;
use Database\Seeders\SubMogouSeeder;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Schema;
use Tests\Support\UserAuthenticated;

uses()->group('admin','api','mogou-data-collection');
uses(UserAuthenticated::class);

beforeEach(function(){
    $this->seed([
        CategorySeeder::class,
        MogouSeeder::class,
        MogousCategorySeeder::class,
        SubMogouSeeder::class
    ]);
    $this->setupAdmin();
});

test("mogou and mogou category table exist",function()
{
    $this->assertTrue(Schema::hasTable('mogous'));
    $this->assertTrue(Schema::hasTable('mogous_categories'));
});

test("mogou data can be fetched",function()
{
    $response = $this->authenticatedAdmin()->getJson(route('api.admin.mogous.index'));


    dd($response->json());
    $response->assertOk();
    $response->assertJsonCount(10,'mogous.data');
    $response->assertJsonStructure([
        'mogous' => [
            'data' => [
                '*' => [
                    'id',
                    'name',
                    'description',
                    'categories' => [
                        '*' => [
                            'id',
                            'name'
                        ]
                    ]
                ]
            ]
        ]
    ]);
});
