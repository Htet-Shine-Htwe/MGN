<?php

namespace App\Repo\Admin;

use App\Models\User;

class UserSubscriptionRepo
{

    public User $user;

    public function setUser(User|string $user) : UserSubscriptionRepo
    {
        if(is_string($user))
        {
            $this->user = User::where('user_code',$user)->firstOrFail();
        }
        else{
            $this->user = $user;
        }
        return $this;
    }

    public function subscriptions()
    {
        return $this->user->subscriptions->map(function($subscription){
            return [
                'id' => $subscription->id,
                'name' => $subscription->subscription->title,
            ];
        });
    }

}
