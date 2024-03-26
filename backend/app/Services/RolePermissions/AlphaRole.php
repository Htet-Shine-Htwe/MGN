<?php

namespace App\Services\RolePermissions;

use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;
use Spatie\Permission\Models\Role;

class AlphaRole
{
    protected string $guard = "web";

    public function __construct()
    {
    }

    public function setGuard(string $guard): AlphaRole
    {
        $this->guard = $guard;
        return $this;
    }

    public function getRoles() : Collection
    {
        return DB::table('roles')->where('guard_name', $this->guard)->get();
    }

    public function getPermissions() : Collection
    {
        return DB::table('permissions')->where('guard_name', $this->guard)->get();
    }

    public function createNewRole(array|string $roles): void
    {
        if(is_array($roles))
        {
            foreach($roles as $role)
            {
                Role::create(['name' => $role, 'guard_name' => $this->guard]);
            }
        }
        else{
            Role::create(['name' => $roles, 'guard_name' => $this->guard]);
        }
    }
}
