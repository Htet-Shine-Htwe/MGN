<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\MogouActionRequest;
use App\Models\Mogou;
use App\Repo\Admin\Mogou\MogouActionRepo;
use App\Repo\Admin\Mogou\MogouRepo;
use App\Traits\CacheResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class MogouController extends Controller
{

    use CacheResponse;


    public function __construct(protected MogouRepo $mogouRepo, protected MogouActionRepo $mogouActionRepo)
    {
    }

    public function index(Request $request)
    {

        $collection =  $this->mogouRepo
            ->withCategories()
            ->withLastFourChapters()
            ->get($request);

        $collection->each(function ($mogou) {

            $key = $mogou->rotation_key;

            $subMogou = $mogou->subMogous($key)->select('title')->latest()->limit(3)->get();

            $mogou->setRelation('subMogous', $subMogou);
        });

        return response()->json([
            'mogous' => $collection
        ]);
    }

    public function create(MogouActionRequest $request)
    {
        $mogou = $this->mogouActionRepo->create($request);

        return response()->json([
            'mogou' => $mogou
        ], Response::HTTP_CREATED);
    }

    public function update(MogouActionRequest $request, Mogou $mogou)
    {
        $mogou = $this->mogouActionRepo->update($request, $mogou);

        return response()->json([
            'mogou' => $mogou
        ]);
    }

    public function delete(Request $request)
    {
        $mogou = Mogou::find($request->input('mogou_id'));

        $this->mogouActionRepo->delete($mogou);

        return response()->json([
            'message' => 'Mogou deleted successfully'
        ]);
    }
}
