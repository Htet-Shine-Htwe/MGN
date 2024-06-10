<?php

use App\Enum\MogousStatus;
use Database\Seeders\CategorySeeder;
use Illuminate\Http\Testing\File;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Schema;
use Tests\Support\UserAuthenticated;

uses()->group('admin','api','mogou-action');
uses(UserAuthenticated::class);

beforeEach(function(){
    $this->seed([
        CategorySeeder::class
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
        'release_year',
        'released_at',
        'categories',
    ];
});

dataset('mogou-data-collection',[
    fn() => [
        'title' => 'Solo Leveling',
        'status' => MogousStatus::PUBLISHED->value,
        'description' => 'Solo Leveling Description',
        'cover' => UploadedFile::fake()->image('cover.jpg'),
        'release_year' => 2020,
        'categories' => [
            1,2,3
        ],
        'released_at' => '2020-01-01 00:00:00'
    ],

]);

test("mogou and mogou category table exist",function()
{
    $this->assertTrue(Schema::hasTable('mogous'));
    $this->assertTrue(Schema::hasTable('mogous_categories'));
});

test("create mogou body validation",function()
{
    $response = $this->authenticatedAdmin()->postJson(route('api.admin.mogous.store'),[]);
    $response->assertStatus(422);
    $response->assertJsonValidationErrors([
        'title',
        'description',
        'cover',
        'status',
    ]);
});

test("mogou title unique validation",function($mogou_data)
{
    $mogou = $this->authenticatedAdmin()->postJson(route('api.admin.mogous.store'),$mogou_data);
    $mogou->assertStatus(201);

    $this->assertDatabaseHas('mogous',[
        'title' => $mogou_data['title']
    ]);

    $response = $this->authenticatedAdmin()->postJson(route('api.admin.mogous.store'),$mogou_data);
    $response->assertStatus(422);
    $response->assertJsonValidationErrors([
        'title'
    ]);
})
->with('mogou-data-collection');

test("mogou cover image validation",function($mogou_data)
{
    $mogou_data['cover'] = UploadedFile::fake()->create('cover.pdf',1000,'application/pdf');

    $response = $this->authenticatedAdmin()->postJson(route('api.admin.mogous.store'),$mogou_data);
    $response->assertStatus(422);
    $response->assertJsonValidationErrors([
        'cover'
    ]);
})
->with('mogou-data-collection');

test("mogou can be created",function($mogou_data)
{
    $response = $this->authenticatedAdmin()->postJson(route('api.admin.mogous.store'),$mogou_data);
    $response->assertStatus(201);

    $this->assertDatabaseHas('mogous',[
        'title' => $mogou_data['title']
    ]);

    $this->assertFileExists(storage_path('app/public/mogou/cover/'.$response->json('cover')));

    $mogou = $response->json('mogou');

    $this->assertDatabaseHas('mogous_categories',[
        'mogou_id' => $mogou['id'],
        'category_id' => $mogou_data['categories'][0]
    ]);
})
->with('mogou-data-collection');

test("mogou can be updated",function($mogou_data)
{
    $mogou = $this->authenticatedAdmin()->postJson(route('api.admin.mogous.store'),$mogou_data);
    $mogou->assertStatus(201);

    $mogou = $mogou->json('mogou');

    $mogou_data['title'] = 'Updated Title';
    $mogou_data['cover'] = UploadedFile::fake()->image('cover.jpg');

    $response = $this->authenticatedAdmin()->putJson(route('api.admin.mogous.update',$mogou['slug']),$mogou_data);
    $response->assertOk();

    $this->assertDatabaseHas('mogous',[
        'title' => $mogou_data['title']
    ]);

    $this->assertFileExists(storage_path('app/public/mogou/cover/'.$response->json('cover')));

    $mogou = $response->json('mogou');

    $this->assertDatabaseHas('mogous_categories',[
        'mogou_id' => $mogou['id'],
        'category_id' => $mogou_data['categories'][0]
    ]);
})
->with('mogou-data-collection');

test("mogou can't update with duplicate title",function($mogou_data){
    $mogou = $this->authenticatedAdmin()->postJson(route('api.admin.mogous.store'),$mogou_data);
    $mogou->assertStatus(201);

    $mogou_data_two = $mogou_data;
    $mogou_data_two['title'] = 'Solo Leveling 2';

    $mogou_two = $this->authenticatedAdmin()->postJson(route('api.admin.mogous.store'),$mogou_data_two);
    $mogou_two->assertStatus(201);


    $mogou = $mogou->json('mogou');

    $mogou_data['title'] = 'Solo Leveling 2';
    $mogou_data['cover'] = UploadedFile::fake()->image('cover.jpg');


    $response = $this->authenticatedAdmin()->putJson(route('api.admin.mogous.update',$mogou['slug']),$mogou_data);
    $response->assertStatus(422);
    $response->assertJsonValidationErrors([
        'title'
    ]);
})
->with('mogou-data-collection');

test("mogou can't update due to invalid mogou",function($mogou_data){
    $mogou = $this->authenticatedAdmin()->postJson(route('api.admin.mogous.store'),$mogou_data);
    $mogou->assertStatus(201);

    $mogou = $mogou->json('mogou');

    $mogou_data['title'] = 'Updated Title';
    $mogou_data['cover'] = UploadedFile::fake()->image('cover.jpg');

    $response = $this->authenticatedAdmin()->putJson(route('api.admin.mogous.update','invalid-slug'),$mogou_data);
    $response->assertStatus(404);
})
->with('mogou-data-collection');

