<?php

namespace App\Enum;

enum MogousStatus : int
{
    case DRAFT = 0;
    case PUBLISHED = 1;
    case ARCHIVED = 2;
    case DELETED = 3;

    public static function getRandomStatus(): int
    {
        return match (rand(0, 3)) {
            0 => self::DRAFT->value,
            1 => self::PUBLISHED->value,
            2 => self::ARCHIVED->value,
            3 => self::DELETED->value
        };
    }

}
