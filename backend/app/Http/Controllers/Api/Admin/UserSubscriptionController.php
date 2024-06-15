<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\UserRegistrationRequest;
use App\Repo\Admin\UserRegistrationRepo;
use App\Repo\Admin\UserSubscriptionRepo;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class UserSubscriptionController extends Controller
{
    public function __construct(
        protected UserRegistrationRepo $userRegistrationRepo,
        protected UserSubscriptionRepo $userSubscriptionRepo
    )
    {
    }

    public function index(Request $request) :JsonResponse
    {
        $users = $this->userRegistrationRepo->list($request);

        return response()->json([
            'users' => $users
        ]);
    }

    public function create(UserRegistrationRequest $request) :JsonResponse
    {
       return tryCatch(function() use($request){
            $user =  $this->userRegistrationRepo->registerUser($request);
            return response()->json([
                'message' => 'User registered successfully',
                'user' => $user
            ]);
        },'User registration failed');
    }

    public function update(UserRegistrationRequest $request) :JsonResponse
    {
        $id = $request->input('user_code');
        return tryCatch(function() use($request,$id){
            $this->userRegistrationRepo->updateUser($request,$id);
            return response()->json([
                'message' => 'User updated successfully'
            ]);
        },'User update failed');
    }

    // public function delete(Request $request) :JsonResponse
    // {
    //     return tryCatch(function() use($request){
    //         $this->userRegistrationRepo->deleteUser($request->input('user_id'));
    //         return response()->json([
    //             'message' => 'User deleted successfully'
    //         ]);
    //     },'User delete failed');
    // }

    public function subscriptions(string $user_code) :JsonResponse
    {
        $user_subscriptions = $this->userSubscriptionRepo->setUser($user_code)->subscriptions();

        return response()->json([
            'subscriptions' => $user_subscriptions
        ]);
    }
}
