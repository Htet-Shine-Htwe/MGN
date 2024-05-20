<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Mogou extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'slug',
        'description',
        'author',
        'cover',
        'status',
        'release_year',
        'released_at',
    ];

    protected $with = ['categories'];


    public function categories()
    {
        return $this->belongsToMany(Category::class, 'mogous_categories');
    }

    public function subMogous()
    {
        return $this->hasMany(SubMogou::class);
    }

    public function getRouteKeyName()
    {
        return 'slug';
    }
}
