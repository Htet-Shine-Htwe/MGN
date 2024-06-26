<?php

namespace App\Services\Partition;

class TablePartition
{
    protected string $tableName = 'table';

    protected array $rotationPrefix;

    public function __construct(array $rotationPrefix)
    {
        $this->rotationPrefix = $rotationPrefix;
    }

    public function getPartitionPrefix(): string
    {
        return $this->tableName;
    }
}
