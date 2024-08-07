<?php

namespace App\Http\Controllers\Api\User;

use App\Enum\MogousStatus;
use App\Http\Controllers\Controller;
use App\Models\Mogou;
use App\Repo\Admin\Mogou\MogouRepo;
use Illuminate\Http\Request;

class HomePageController extends Controller
{
    // make constructor
    public function __construct(protected MogouRepo $mogouRepo)
    {
        //
    }

    public function carousel()
    {
        $mogou = Mogou::select("id", "title", "slug", "cover", "rotation_key", "description", "finish_status", 'mogou_type', 'status',"rating")
            ->where('status', MogousStatus::PUBLISHED->value)
            ->with('categories:title')
            ->take(8)
            ->get();

        return response()->json([
            'mogous' => $mogou
        ]);
    }

    public function mostViewed()
    {
        $mogous = Mogou::select("id", "title", "slug", "cover",)
            ->where('status', MogousStatus::PUBLISHED->value)
            ->with('categories:title')
            ->take(20)
            ->get();

        return response()->json([
            'mogous' => $mogous
        ]);
    }

    public function lastUploaded(Request $request)
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
}
