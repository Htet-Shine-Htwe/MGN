<?php

namespace App\Enum;

enum MogouTypeEnum :int
{
    case MANGA = 0;
    case MANHWA = 1;
    case COMIC = 2;


    public static function getRandomMogouType(): int
    {
        return match (rand(0, 2)) {
            0 => self::MANGA->value,
            1 => self::MANHWA->value,
            2 => self::COMIC->value,
        };
    }

    public static function getMogouTypeName(MogouTypeEnum $type): string
    {
        return match ($type) {
            self::MANGA => 'Manga',
            self::MANHWA => 'Manhwa',
            self::COMIC => 'Comic',
        };
    }

    public static function getValues(): array
    {
        return [
            self::MANGA->value,
            self::MANHWA->value,
            self::COMIC->value,
        ];
    }

    public static function getMogouType(string $type): int
    {
        return match ($type) {
            'Manga' => self::MANGA->value,
            'Manhwa' => self::MANHWA->value,
            'Comic' => self::COMIC->value,
        };
    }



}
