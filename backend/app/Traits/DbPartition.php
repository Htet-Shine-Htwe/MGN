<?php

namespace App\Traits;

trait DbPartition
{
    protected string $partition_prefix = 'table';

    public function getPartitionPrefix(): string
    {
        return $this->partition_prefix;
    }

}
