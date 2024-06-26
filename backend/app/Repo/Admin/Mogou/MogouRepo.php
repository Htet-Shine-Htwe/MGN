<?php

namespace App\Repo\Admin\Mogou;

use App\Models\Mogou;
use App\Traits\CacheResponse;
use Illuminate\Http\Request;

class MogouRepo implements \App\Contracts\ModelRepoInterface {

    protected Request $request;

    protected $collection;

    public function __construct() {
        $this->collection = Mogou::query();
    }

    public function get( Request $request, bool $withFilter = true ) : mixed {

        if ( $withFilter ) {
            $this->collection();
        }

        return $this->collection->latest( 'id' )->paginate( $request->input( 'per_page', 10 ) );

    }

    public function collection() : mixed {
        $this->collection = $this->collection
        ->search()
        ->legalOnly()
        ->filterStatus()
        ->filterCategory()
        ->orderByRating()
        ->byFinishStatus()
        ->byMogouType()
        ->year();

        return $this->collection;
    }

    public function withLastFourChapters() : self {
        $this->collection =  $this->collection->lastFourChapters();
        return $this;
    }

    public function withCategories() : self {
        $this->collection = $this->collection->with( 'categories:id,title' );
        return $this;
    }
}
