<?php

use Database\Seeders\AdminPermissionSeeder;
use Illuminate\Support\Facades\Route;

use Tests\Support\UserAuthenticated;

uses()->group('admin','api','admin-roles');
uses(UserAuthenticated::class);

uses()->beforeEach(function () {
    $this->seed([
        AdminPermissionSeeder::class
    ]);

});


test("can get role route exists",function(){
    $this->assertTrue(Route::has('api.admin.roles.index'));
});

test('can get roles',function(){
    $this->setupAdmin();

    $response = $this->authenticatedAdmin()->getJson(route('api.admin.roles.index'))
        ->assertOk();

    $status = $response->assertStatus(200);

    $response->assertJsonStructure([
        'roles' =>[
            '0'
        ]
        ]);

});


test('can get permissions',function(){
    $this->setupAdmin();

    $response = $this->authenticatedAdmin()->getJson(route('api.admin.permissions.index'))
        ->assertOk();

    $status = $response->assertStatus(200);

    $response->assertJsonStructure([
        'permissions' =>[
            '0'
        ]
        ]);

});

test("get members with roles",function(){
    $this->setupAdmin();

    $this->admin->assignRole('admin');

    $response = $this->authenticatedAdmin()->getJson(route('api.admin.members.index'))
        ->assertOk();

    $decoded = json_decode($response->getContent());



    dd($decoded);
});
