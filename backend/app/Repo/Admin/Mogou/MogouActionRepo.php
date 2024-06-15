<?php

namespace App\Repo\Admin\Mogou;

use App\Enum\MogousStatus;
use App\Http\Requests\MogouActionRequest;
use App\Models\Mogou;
use HydraStorage\HydraStorage\Traits\HydraMedia;

class MogouActionRepo
{

    use HydraMedia;

    public function create(MogouActionRequest $request)
    {
        $data = $request->validated();
        $request->validate([
            'title' => 'unique:mogous,title',
            'cover' => 'required|image'
        ]);

        $data['cover'] = $this->storeMedia($request->file('cover'), 'mogou/cover',false);
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
            $data['cover'] = $this->storeMedia($request->file('cover'), 'mogou/cover',false);
        }

        $mogou->update($data);

        $categories = $request->input('categories', []);

        $mogou->categories()->sync($categories);

        return $mogou;
    }


    public function delete(Mogou $mogou)
    {

        $cover_prefix = config('control.mogou.cover.path');

        $full_path = "public/". $cover_prefix  . '/' . $mogou->cover;

        $this->removeMedia($full_path);

        $mogou->delete();
    }

}
