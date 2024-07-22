<?php

namespace App\Enum;
use App\Contracts\SmartEnum;

enum AdminRole : string implements SmartEnum
{
    case Admin = 'admin';
    case Moderator = 'moderator';

    public static function getRoles(): array
    {
        return [
            self::Admin,
            self::Moderator
        ];
    }

    public static function getValues(): array
    {
        return [
            self::Admin => 'Admin',
            self::Moderator => 'Moderator'
        ];
    }
}


