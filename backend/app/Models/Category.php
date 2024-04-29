<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;
class Category extends Model
{
    use HasFactory;

    protected $fillable = ['title','slug'];

    public $timestamps = false;

    protected static function boot()
    {
        parent::boot();

        static::creating(function($category){
            $category->slug = Str::slug($category->title);
        });

        static::updating(function($category){
            $category->slug = Str::slug($category->title);
        });
    }

    public function scopeSearch($query, $search)
    {
        return $query->where('title', 'like', '%'.$search.'%');
    }
}
