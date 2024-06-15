<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Subscription extends Model
{
    use HasFactory;

    protected $guarded = [];

    public $timestamps = false;


    public function scopeSearch($query, $search) : \Illuminate\Database\Eloquent\Builder
    {
        return $query->where('title', 'like', '%' . $search . '%');
    }

    public function users() : \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(User::class, 'current_subscription_id');
    }
}
