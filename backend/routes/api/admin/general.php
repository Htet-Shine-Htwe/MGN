<?php

use App\Http\Controllers\Api\Admin\AdminController;
use App\Http\Controllers\Api\Admin\ApplicationConfigController;
use App\Http\Controllers\Api\Admin\CategoryController;
use App\Http\Controllers\Api\Admin\MogouController;
use App\Http\Controllers\Api\Admin\SubMogouController;
use App\Http\Controllers\Api\Admin\SubscriptionController;
use App\Http\Controllers\Api\Admin\UserSubscriptionController;
use App\Http\Controllers\TestController;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth:sanctum'])
->prefix('admin')
->name('admin.')->group(function(){
    // Change Password
    Route::get('/roles',[AdminController::class,'roles'])->name('roles.index');
    Route::post('/roles',[AdminController::class,'createRole'])->name('roles.store');

    Route::get('/permissions',[AdminController::class,'permissions'])->name('permissions.index');

    Route::get('/members',[AdminController::class,'members'])->name('members.index');

    Route::controller(SubscriptionController::class)->group(function(){
        Route::get('/subscriptions','index')->name('subscriptions.index');
        Route::get('/subscriptions/{subscription}','show')->name('subscriptions.show');
        Route::post('/subscriptions','create')->name('subscriptions.store');
        Route::put('/subscriptions/{subscription}','update')->name('subscriptions.update');
        Route::post('/subscriptions/{subscription}','delete')->name('subscriptions.delete');
    });

    Route::controller(CategoryController::class)->group(function(){
        Route::get('/categories','index')->name('categories.index');
        Route::post('/categories','create')->name('categories.store');
        Route::put('/categories/{category}','update')->name('categories.update');
        Route::post('/categories/{category}','delete')->name('categories.delete');
    });

    Route::controller(UserSubscriptionController::class)->group(function(){
        Route::get('/users','index')->name('subscription-users.index');
        Route::post('/users','create')->name('subscription-users.store');
        Route::post('/users/update','update')->name('subscription-users.update');

        Route::get('/users/{user_code}/subscriptions','subscriptions')->name('subscription-users.subscriptions');
        Route::get('/users/show/{user_code}','show')->name('subscription-users.show');
    });

    Route::controller(MogouController::class)->group(function(){
        Route::get('/mogous','index')->name('mogous.index');

        Route::post('/mogous','create')->name('mogous.store');
        Route::put('/mogous/{mogou}','update')->name('mogous.update');
        Route::post('/delete/mogous','delete')->name('mogous.delete');
    });

    Route::controller(SubMogouController::class)->group(function(){

    });
});





Route::controller(TestController::class)->group(function(){
    Route::post('/test','test')->name('test');
});
