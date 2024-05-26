<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\MogouActionRequest;
use App\Models\Mogou;
use App\Repo\Admin\Mogou\MogouActionRepo;
use App\Repo\Admin\Mogou\MogouRepo;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class MogouController extends Controller
{

    public function __construct(protected MogouRepo $mogouRepo,protected MogouActionRepo $mogouActionRepo)
    {

    }

    public function index(Request $request)
    {
        $mogous = $this->mogouRepo
        ->withCategories()
        ->withLastFourChapters()
        ->get($request);

        return response()->json([
            'mogous' => $mogous
        ]);
    }

    public function create(MogouActionRequest $request)
    {
        $mogou = $this->mogouActionRepo->create($request);

        return response()->json([
            'mogou' => $mogou
        ],Response::HTTP_CREATED);
    }

    public function update(MogouActionRequest $request,Mogou $mogou)
    {
        $mogou = $this->mogouActionRepo->update($request,$mogou);

        return response()->json([
            'mogou' => $mogou
        ]);
    }

}
