<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Repo\Admin\MogouRepo;
use Illuminate\Http\Request;

class MogouController extends Controller
{

    public function __construct(protected MogouRepo $mogouRepo)
    {

    }

    public function index(Request $request)
    {
        $mogous = $this->mogouRepo->get($request);

        return response()->json([
            'mogous' => $mogous
        ]);
    }
}
