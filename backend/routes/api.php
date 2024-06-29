<?php

use App\Models\Mogou;
use App\Services\Api\DataClient;
use Illuminate\Http\Request;
use Illuminate\Support\Benchmark;
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
        // Set the number of items per page
        $title = DataClient::getMangaData()[0]['title'];
        // "Eiyuu" Kaitai to Eiyuu Kaitai
        // remove "" to normal string
        return str_replace('"', '', $title);
        $perPage = 10;

        // Build the query for Mogou instances and apply pagination
        $mogouQuery = Mogou::select('id','title','status','cover','rotation_key')
        ->search()
        ->paginate($perPage);

        // Get the paginated results
        $mogous = $mogouQuery->getCollection();

        // Iterate over each Mogou instance to load the dynamic subMogous relationship
        $mogous->each(function ($mogou) {
            // Dynamically set the table name based on some logic or directly
            $table_name = $mogou->rotation_key;

            // Load the dynamic subMogous relationship
            $subMogous = $mogou->subMogous($table_name)->select('title')->latest()->limit(3)->get();

            // Attach the subMogous relationship to the mogou instance
            $mogou->setRelation('subMogous', $subMogous);
        });

        // Replace the collection in the paginator with the modified collection
        $mogouQuery->setCollection($mogous);

        // Return the paginated results as JSON
        return response()->json($mogouQuery);
    });
