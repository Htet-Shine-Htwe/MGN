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

    public static function getStatusName(MogousStatus $status): string
    {
        return match ($status) {
            self::DRAFT => "Draft",
            self::PUBLISHED => "Published",
            self::ARCHIVED => "Archived",
            self::DELETED =>  "Deleted"
        };
    }

    public static function getValues(): array
    {
        return [
            self::DRAFT->value,
            self::PUBLISHED->value,
            self::ARCHIVED->value,
            self::DELETED->value
        ];
    }

    public static function getStatus(string $status): int
    {
        return match ($status) {
            "Draft" => self::DRAFT->value,
            "Published" => self::PUBLISHED->value,
            "Archived" => self::ARCHIVED->value,
            "Deleted" => self::DELETED->value
        };
    }

}
