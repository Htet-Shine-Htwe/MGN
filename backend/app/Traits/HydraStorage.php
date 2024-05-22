<?php

namespace App\Traits;

trait HydraStorage
{
    public function retrieve($path, $file): string
    {
        if (appDriver()->exists($path . '/' . $file)) {
            // return asset(appDriver()->url($path . '/' . $file));
        }

        return $this->default_image;
    }


}
