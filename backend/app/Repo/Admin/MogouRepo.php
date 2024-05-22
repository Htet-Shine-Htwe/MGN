<?php

namespace App\Repo\Admin;

use App\Models\Mogou;
use Illuminate\Http\Request;

class MogouRepo implements \App\Contracts\ModelRepoInterface
{
    protected Request $request;

    public function get(Request $request) : mixed
    {
        $this->request = $request;
        return $this->collection();
    }


    public function collection() : mixed
    {
        return Mogou::search()
        ->filterStatus()
        ->filterCategory()
        ->year()
        ->paginate($this->request->limit ?? 10)
        ->withQueryString();
    }
}
