<?php

namespace App\Enum;

enum MogousStatus : int
{
    case DRAFT = 0;
    case PUBLISHED = 1;
    case ARCHIVED = 2;
    case DELETED = 3;

    public static function getStatuses(): array
    {
        return [
            self::DRAFT => 'Draft',
            self::PUBLISHED => 'Published',
            self::ARCHIVED => 'Archived',
            self::DELETED => 'Deleted',
        ];
    }

}
