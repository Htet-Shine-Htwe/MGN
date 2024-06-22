<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/



Route::prefix('v1')
    ->name('api.')
    ->group(function ()
    {
        \App\Services\Route\RouteHelper::includedRouteFiles(__DIR__ . '/api');
    });

Route::get('v1/test', function () {

    sleep(2);
    return response()->json([
        'message' => "request was successful"
    ]);
});

Route::post('v1/test',function(Request $request){
    sleep(2);
    return response()->json(
        ['message' => 'Wrong credentials. Please try again.',
        'body' =>$request->input()],403
    );
});
