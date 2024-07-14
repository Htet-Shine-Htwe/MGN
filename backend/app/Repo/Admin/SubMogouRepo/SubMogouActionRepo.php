<?php

namespace App\Repo\Admin\SubMogouRepo;

class SubMogouActionRepo
{
    public function __construct(protected $subMogou)
    {
    }

    public function createNewSubMogou(array $data) :void
    {
        $this->subMogou->create($data);
    }

    public function removeSubscriptionId(int|array $id) :void
    {
        $ids = $this->subMogou->subscription_collection;
    }
}
