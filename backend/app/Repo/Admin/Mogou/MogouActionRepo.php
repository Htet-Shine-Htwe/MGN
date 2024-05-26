<?php

namespace App\Repo\Admin\Mogou;

use App\Enum\MogousStatus;
use App\Http\Requests\MogouActionRequest;
use App\Models\Mogou;
use App\Traits\HydraStorage;

class MogouActionRepo
{

    use HydraStorage;

    public function create(MogouActionRequest $request)
    {
        $data = $request->validated();
        $request->validate([
            'title' => 'unique:mogous,title',
            'cover' => 'required|image'
        ]);

        $data['cover'] = $this->storeImage($request->file('cover'), 'mogou/cover');
        $data['status'] = MogousStatus::ARCHIVED;

        $mogou = Mogou::create($data);

        $categories = $request->input('categories', []);

        $mogou->categories()->sync($categories);

        return $mogou;
    }

    public function update(MogouActionRequest $request, Mogou $mogou)
    {
        $data = $request->validated();
        $request->validate([
            'title' => 'unique:mogous,title,' . $mogou->id,
            'cover' => 'nullable|image'
        ]);

        if ($request->hasFile('cover')) {
            $data['cover'] = $this->storeImage($request->file('cover'), 'mogou/cover');
        }

        $mogou->update($data);

        $categories = $request->input('categories', []);

        $mogou->categories()->sync($categories);

        return $mogou;
    }

}
