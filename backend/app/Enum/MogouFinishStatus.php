<?php

namespace App\Enum;

enum MogouFinishStatus :int
{
    case ONGOING = 0;
    case FINISHED = 1;
    case DROPPED = 2;

    public static function getKeyAndValue(): array
    {
        return [
            self::ONGOING => 0,
            self::FINISHED => 1,
            self::DROPPED => 2,
        ];
    }

    public static function getValues(): array
    {
        return [
            self::ONGOING->value,
            self::FINISHED->value,
            self::DROPPED->value,
        ];
    }

    public static function getKey(int $value): string
    {
        return match ($value) {
            self::ONGOING => 'Ongoing',
            self::FINISHED => 'Finished',
            self::DROPPED => 'Dropped',
        };
    }

    public static function getRandomStatus(): int
    {
        return match (rand(0, 2)) {
            0 => self::ONGOING->value,
            1 => self::FINISHED->value,
            2 => self::DROPPED->value,
        };
    }


}
