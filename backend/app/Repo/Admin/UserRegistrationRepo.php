<?php

namespace App\Repo\Admin;

use App\Http\Requests\UserRegistrationRequest;
use App\Models\Subscription;
use App\Models\User;
use Illuminate\Http\Request;

class UserRegistrationRepo
{
    public static function registerUser(UserRegistrationRequest $request) :User
    {
        $request->validate([
            'email' => 'unique:users,email'
        ]);

        $data = $request->validated();
        $data = self::mutateDataSubscription($data);
        return User::create($data);
    }

    public function list(Request $request)
    {
        $users = User::search($request->search)
        ->expiredSubscription($request->expired)
        ->filter($request->filter)
        ->paginate($request->limit ?? 10)
        ->withQueryString();

        return $users;
    }

    public function updateUser(UserRegistrationRequest $request,string $id) :User
    {

        $request->validate([
            'email' => 'unique:users,email,'.$id
        ]);

        $data = $request->validated();
        $data = self::mutateDataSubscription($data);
        $user = User::where('user_code',$id)->firstOrFail();
        $user->update($data);
        return $user;
    }

    protected static function mutateDataSubscription($data)
    {
        $data['current_subscription_id'] = $data['current_subscription_id'] ?? 1;
        if(isset($data['current_subscription_id'])){

            $end_date = Subscription::where('id',$data['current_subscription_id'])->first()->max;

            $data['subscription_end_date'] = now()->addDays($end_date);
        }
        return $data;
    }


}
