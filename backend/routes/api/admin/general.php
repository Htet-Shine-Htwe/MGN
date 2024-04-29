<?php

use App\Http\Controllers\Api\Admin\AdminController;
use App\Http\Controllers\Api\Admin\SubscriptionController;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth:sanctum'])->name('admin.')->group(function(){
    // Change Password
    Route::get('/roles',[AdminController::class,'roles'])->name('roles.index');
    Route::post('/roles',[AdminController::class,'createRole'])->name('roles.store');

    Route::get('/permissions',[AdminController::class,'permissions'])->name('permissions.index');

    Route::get('/members',[AdminController::class,'members'])->name('members.index');


    Route::get('/subscriptions',[SubscriptionController::class,'index'])->name('subscriptions.index');
    Route::post('/subscriptions',[SubscriptionController::class,'create'])->name('subscriptions.store');
    Route::put('/subscriptions/{subscription}',[SubscriptionController::class,'update'])->name('subscriptions.update');
    Route::post('/subscriptions/{subscription}',[SubscriptionController::class,'delete'])->name('subscriptions.delete');

});
