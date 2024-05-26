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

    $this->sampleJsonStructure = [
        'id',
        'title',
        'slug',
        'description',
        'author',
        'cover',
        'status',
        'released_year',
        'released_at',
        'categories',
    ];
});

dataset('mogou-data-collection',[
    fn() => [
        'title' => 'mogou alpha',
        'status' => 2,
        'released_year' => 2020
    ],
    fn() => [
        'title' => 'mogou beta',
        'status' => 2,
        'released_year' => 2020
    ],
]);


test("mogou and mogou category table exist",function()
{
    $this->assertTrue(Schema::hasTable('mogous'));
    $this->assertTrue(Schema::hasTable('mogous_categories'));
});

test("mogou data can be fetched",function()
{
    $response = $this->authenticatedAdmin()->getJson(route('api.admin.mogous.index'));

    $response->assertOk();
    $response->assertJsonCount(10,'mogous.data');

    $response->assertJsonStructure([
        'mogous' => [
            'data' => [
                '*' => $this->sampleJsonStructure
            ]
        ]
    ]);

});

test("mogou data can searched with title",function($data)
{
    \App\Models\Mogou::factory()->create([
        'title' => $data['title']
    ]);

    $response = $this->authenticatedAdmin()->getJson(route('api.admin.mogous.index',[
        'search' => $data['title']
    ]));

    $response->assertOk();
    $response->assertJsonCount(1,'mogous.data');

    $response->assertJsonStructure([
        'mogous' => [
            'data' => [
                '*' => $this->sampleJsonStructure
            ]
        ]
    ]);

})->with('mogou-data-collection');

test("mogou data can be filtered by status",function($data)
{
    \App\Models\Mogou::factory()->create([
        'status' => $data['status']
    ]);

    $response = $this->authenticatedAdmin()->getJson(route('api.admin.mogous.index',[
        'status' => $data['status']
    ]));

    $response->assertOk();

    $mogous = $response->json('mogous.data');

    $this->assertNotEmpty($mogous);

    collect($mogous)->each(function($mogou) use ($data){
        $this->assertEquals($data['status'],$mogou['status']);
    });

})->with('mogou-data-collection');

test("mogou data can be filtered by release year",function($data)
{
    \App\Models\Mogou::factory()->create([
        'released_year' => $data['released_year']
    ]);

    $response = $this->authenticatedAdmin()->getJson(route('api.admin.mogous.index',[
        'year' => $data['released_year']
    ]));

    $response->assertOk();

    $mogous = $response->json('mogous.data');

    $this->assertNotEmpty($mogous);

    collect($mogous)->each(function($mogou) use ($data){
        $this->assertEquals($data['released_year'],$mogou['released_year']);
    });

})->with('mogou-data-collection');

test("mogou data filtered with status & year",function($data)
{
    \App\Models\Mogou::factory()->create([
        'status' => $data['status'],
        'released_year' => $data['released_year']
    ]);

    $response = $this->authenticatedAdmin()->getJson(route('api.admin.mogous.index',[
        'status' => $data['status'],
        'year' => $data['released_year']
    ]));

    $response->assertOk();

    $mogous = $response->json('mogous.data');

    $this->assertNotEmpty($mogous);

    collect($mogous)->each(function($mogou) use ($data){
        $this->assertEquals($data['status'],$mogou['status']);
        $this->assertEquals($data['released_year'],$mogou['released_year']);
    });

})->with('mogou-data-collection');

test("mogou data filtered with status & category & year",function($data){

    $mogou = \App\Models\Mogou::factory()->create([
        'status' => $data['status'],
        'released_year' => $data['released_year']
    ]);

    $category = \App\Models\Category::factory()->create();

    $mogou->categories()->attach($category->id);

    $response = $this->authenticatedAdmin()->getJson(route('api.admin.mogous.index',[
        'status' => $data['status'],
        'category' => $category->id,
        'year' => $data['released_year']
    ]));

    $response->assertOk();

    $mogous = $response->json('mogous.data');

    $this->assertNotEmpty($mogous);

    collect($mogous)->each(function($mogou) use ($data){
        $this->assertEquals($data['status'],$mogou['status']);
        $this->assertEquals($data['released_year'],$mogou['released_year']);
    });

})->with('mogou-data-collection');


test("each mogou has last 3 chapters",function()
{
    $response = $this->authenticatedAdmin()->getJson(route('api.admin.mogous.index'));

    $response->assertOk();

    $mogous = $response->json('mogous.data');

    $this->assertNotEmpty($mogous);

    collect($mogous)->each(function($mogou){
        $this->assertArrayHasKey('sub_mogous',$mogou);
        $this->assertCount(3,$mogou['sub_mogous']);
    });

});
