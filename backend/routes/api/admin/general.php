<?php

use App\Http\Controllers\Api\Admin\AdminController;
use App\Http\Controllers\Api\Admin\CategoryController;
use App\Http\Controllers\Api\Admin\SubscriptionController;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth:sanctum'])->name('admin.')->group(function(){
    // Change Password
    Route::get('/roles',[AdminController::class,'roles'])->name('roles.index');
    Route::post('/roles',[AdminController::class,'createRole'])->name('roles.store');

    Route::get('/permissions',[AdminController::class,'permissions'])->name('permissions.index');

    Route::get('/members',[AdminController::class,'members'])->name('members.index');

    Route::controller(SubscriptionController::class)->group(function(){
        Route::get('/subscriptions','index')->name('subscriptions.index');
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

});
