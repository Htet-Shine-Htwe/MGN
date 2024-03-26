<?php

namespace App\Enum;

enum AdminRole : string
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
}
