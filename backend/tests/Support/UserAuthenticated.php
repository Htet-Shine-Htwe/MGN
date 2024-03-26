<?php

namespace Tests\Support;
use App\Models\User;
use App\Models\Admin;
use Illuminate\Contracts\Auth\Authenticatable;

trait UserAuthenticated
{
    private User $user;

    private Admin $admin;

    public function setupUser(array $body = [])
    {
        $this->user = User::factory()->create($body);
    }

    public function authenticated(Authenticatable $user = null)
    {
        return $this->actingAs($user ?? $this->user);
    }

    public function setupAdmin(array $body = [])
    {
        $this->admin = Admin::factory()->create($body);
    }

    public function authenticatedAdmin(Authenticatable $admin = null)
    {
        return $this->actingAs($admin ?? $this->admin);
    }

}
