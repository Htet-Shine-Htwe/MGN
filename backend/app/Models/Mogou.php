<?php

namespace App\Models;

use App\Enum\MogouFinishStatus;
use App\Enum\MogousStatus;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;
class Mogou extends Model
{
    use HasFactory,\Staudenmeir\EloquentEagerLimit\HasEagerLimit;

    protected $fillable = [
        'rotation_key',
        'title',
        'slug',
        'description',
        'author',
        'cover',
        'status',
        'finish_status',
        'legal_age',
        'rating',
        'released_year',
        'released_at',
    ];

    protected $casts = [
        'status' => MogousStatus::class,
        'released_at' => 'datetime',
        'rating' => 'double',
        'legal_age' => 'boolean',
        'finish_status' => MogouFinishStatus::class,
    ];

    protected $appends = ['status_name'];

    protected static function boot()
    {
        parent::boot();

        static::creating(function($mogou){
            $mogou->slug = Str::slug($mogou->title);

        });

        static::updating(function($mogou){
            $mogou->slug = Str::slug($mogou->title);
        });
    }

    public function categories()
    {
        return $this->belongsToMany(Category::class, 'mogous_categories');
    }


    public function subMogous($table_name="alpha")
    {
        $instance = new SubMogou();
        $instance->setTable($table_name."_sub_mogous");

        return $this->newHasMany(
            $instance->newQuery(),$this,$instance->getTable().'.mogou_id','id'
        );
    }

    public function getRouteKeyName()
    {
        return 'slug';
    }

    protected function getStatusNameAttribute()
    {
        if($this->status)
        {
            return MogousStatus::getStatusName($this->status);
        }

    }

    public function scopeLastFourChapters($query)
    {
        return $query->with(['subMogous' => function($q){
            $q->select('id','chapter_number','mogou_id')
                ->orderBy('id', 'desc')
                ->limit(3);
        }]);
    }

    public function scopeOrderByRating($query)
    {
        return $query->when(request('order_by_rating'), function($query){
            return $query->orderBy('rating', request('order_by_rating'));
        });
    }

    public function scopeFilterStatus($query,bool $orWhere = true)
    {
        $status = request()->input('status');
        return $query->when($status, function($query) use ($orWhere,$status){
            return $orWhere ? $query->orWhere('status', $status) : $query->where('status', $status);
        });
    }

    public function scopeLegalOnly($query)
    {
        return $query->when(request('legal_only'), function($query){
            return $query->where('legal_age', true);
        });
    }

    public function scopeByFinishStatus($query)
    {
        $finishStatus = request()->input('finish_status');
        return $query->when($finishStatus, function($query) use ($finishStatus){
            return $query->where('finish_status', $finishStatus);
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
            return $query->where('released_year', $year);
        });
    }



    // protected function newRelatedInstance($class)
    // {
    //     $table_name = $this->rotate_key."_".(new $class)->getTable();
    //     return tap((new $class())->setTable($table_name), function ($instance) {
    //         if (!$instance->getConnectionName()) {
    //             $instance->setConnection($this->connection);
    //         }
    //     });
    // }

}
