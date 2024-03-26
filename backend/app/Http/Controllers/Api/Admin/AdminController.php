<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Models\Admin;
use App\Services\RolePermissions\AlphaRole;
use Illuminate\Http\Request;

class AdminController extends Controller
{

    public function __construct(public AlphaRole $alphaRole)
    {

    }

    public function roles(Request $request)
    {
        $roles = $this->alphaRole->setGuard('admin')->getRoles();

        return response()->json([
            'roles' => $roles
        ]);
    }

    public function permissions(Request $request)
    {
        $permissions = $this->alphaRole->setGuard('admin')->getPermissions();

        return response()->json([
            'permissions' => $permissions
        ]);
    }

    public function members(Request $request)
    {

        $members =  Admin::with('roles')->get();

        return response()->json([
            'members' => $members
        ]);
    }
}
