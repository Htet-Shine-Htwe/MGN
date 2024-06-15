<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SubMogou extends Model
{
    use HasFactory,\Staudenmeir\EloquentEagerLimit\HasEagerLimit;

    protected $fillable = [
        'title',
        'slug',
        'description',
        'cover',
        'status',
        'chapter_number',
        'views',
        'subscription_only',
        'subscription_collection',
        'mogou_id',
    ];



    public function getSubscriptionCollectionAttribute($value)
    {
        return json_decode($value, true);
    }

    public function mogou()
    {
        return $this->belongsTo(Mogou::class);
    }

    public function getRouteKeyName()
    {
        return 'slug';
    }

    public function mogou_images()
    {
        return $this->hasMany(SubMogouImage::class);
    }

}
