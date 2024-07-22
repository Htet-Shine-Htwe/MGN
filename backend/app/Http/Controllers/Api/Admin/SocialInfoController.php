<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Repo\Admin\SocialInfo\SocialInfoRepo;
use Illuminate\Http\Request;

class SocialInfoController extends Controller
{
    public function __construct(protected SocialInfoRepo $socialInfoRepo)
    {

    }

    public function index()
    {
        return $this->socialInfoRepo->all();
    }

    public function store(Request $request)
    {
        return $this->socialInfoRepo->create($request->all());
    }

    public function update(Request $request, $id)
    {
        return $this->socialInfoRepo->update($id, $request->all());
    }
}
