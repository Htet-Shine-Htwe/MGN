<?php

namespace App\Repo\Admin;

use App\Models\User;

class UserSubscriptionRepo
{

    public User $user;
    public function __construct(User $user)
    {
        $this->user = $user;
    }

    public function subscribe(int $subscription_id)  : User
    {
        $this->user->subscription_id = $subscription_id;
        $this->user->save();
        return $this->user;
    }

    public function unsubscribe() : User
    {
        $this->user->subscription_id = null;
        $this->user->save();
        return $this->user;
    }

    public function isSubscribed() : bool
    {
        return $this->user->subscription_id ? true : false;
    }

    public function getSubscription() : int
    {
        return $this->user->subscription_id;
    }

}
