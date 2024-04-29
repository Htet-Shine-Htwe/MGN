<?php

namespace App\Repo\Admin;

use App\Http\Requests\SubscriptionCreateRequest;
use App\Models\Subscription;
use Illuminate\Http\Request;

class SubscriptionRepo
{

    protected Request $request;

    public function get(Request $request) : mixed
    {
        $this->request = $request;
        return $this->collection();
    }

    public function collection() : mixed
    {
        return Subscription::search($this->request->search)
        ->withCount('users')
        ->paginate($this->request->limit ?? 10)
        ->withQueryString();
    }

    public function total_user_subscription() : int
    {
        return Subscription::withCount('users')->get()->sum('users_count');
    }

    public function create(SubscriptionCreateRequest $request) : Subscription
    {
        $request->validate([
            'title' => 'unique:subscriptions,title'
        ]);

        return Subscription::create($request->validated());
    }

    public function update(SubscriptionCreateRequest $request, Subscription $subscription) : Subscription
    {
        $request->validate([
            'title' => 'unique:subscriptions,title,'.$subscription->id
        ]);
        $subscription->update($request->validated());
        return $subscription;
    }

    public function delete(Subscription $subscription) : bool
    {
        return $subscription->delete();
    }

}
