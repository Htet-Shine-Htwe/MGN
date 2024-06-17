<?php

use App\Http\Controllers\Api\User\UserFavoriteController;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth:sanctum'])->name('user.')->group(function(){


    Route::controller(UserFavoriteController::class)->group(function(){
        Route::get('/user-favorites','index')->name('user-favorites.index');
        Route::post('/user-favorites/add','create')->name('user-favorites.store');
        Route::post('/user-favorites/remove','delete')->name('user-favorites.delete');
    });

});
