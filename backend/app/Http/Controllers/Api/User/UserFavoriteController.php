<?php

namespace App\Http\Controllers\Api\User;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Repo\User\Favorite\UserFavoriteRepo;
use Illuminate\Http\Request;

class UserFavoriteController extends Controller
{
    public function __construct(protected UserFavoriteRepo $userFavoriteRepo)
    {
    }

    public function index(Request $request)
    {
        return response()->json($this->userFavoriteRepo->getFavorites());
    }

    public function create(Request $request)
    {
        // make auth user as User
        $user = $request->user();

        $this->userFavoriteRepo->setUser($user);

        $this->userFavoriteRepo->addFavorite($request->mogou_id);

        return response()->json(['message' => 'Favorite added']);
    }

    public function delete(Request $request, $user_favorite)
    {
        $user = $request->user();

        $this->userFavoriteRepo->setUser($user);

        $this->userFavoriteRepo->removeFavorite($user_favorite);

        return response()->json(['message' => 'Favorite removed']);
    }
}
