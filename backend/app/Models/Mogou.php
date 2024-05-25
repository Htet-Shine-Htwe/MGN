<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Mogou extends Model
{
    use HasFactory,\Staudenmeir\EloquentEagerLimit\HasEagerLimit;

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


    public function scopeLastFourChapters($query)
    {
        // add select
        return $query->with(['subMogous' => function($q){
            $q->select('id','chapter_number','mogou_id')
                ->orderBy('id', 'desc')
                ->limit(3);
        }]);
    }

    public function scopeFilterStatus($query,bool $orWhere = true)
    {
        $status = request()->input('status');
        return $query->when($status, function($query) use ($orWhere,$status){
            return $orWhere ? $query->orWhere('status', $status) : $query->where('status', $status);
        });
    }

    public function scopeSearch($query)
    {
        $search = request()->input('search');
        return $query->when($search, function($query) use ($search){
            return $query->where('title', 'like', '%'.$search.'%')
                ->orWhere('author', 'like', '%'.$search.'%');
        });
    }

    public function scopeFilterCategory($query,bool $orWhere = true)
    {
        $category = request()->input('category');
        return $query->when($category, function($query) use ($orWhere,$category){
            return $orWhere ? $query->orWhereHas('categories', function($query) use ($category){
                return $query->where('categories.id', $category);
            }) : $query->whereHas('categories', function($query) use ($category){
                return $query->where('categories.id', $category);
            });
        });
    }

    public function scopeYear($query)
    {
        $year = request()->input('year');
        return $query->when($year, function($query) use ($year){
            return $query->where('release_year', $year);
        });
    }


}
