<?php

namespace App\Vaildations;

class MogouValidation
{
    private static function getEnumValuesAsString($enumClass)
    {
        return implode(',', $enumClass::getValues());
    }

    private static function createRule($enumClass,bool $nullable = false)
    {
        return ($nullable ? 'nullable|' : 'required|') . 'in:' . self::getEnumValuesAsString($enumClass);
    }


    private static function createMessage($enumClass, $message)
    {
        return $message . self::getEnumValuesAsString($enumClass);
    }

    public static function finishStatus()
    {
        return self::createRule(\App\Enum\MogouFinishStatus::class);
    }

    public static function status()
    {
        return self::createRule(\App\Enum\MogousStatus::class);
    }

    public static function mogouType(bool $nullable = false)
    {
        return self::createRule(\App\Enum\MogouTypeEnum::class, $nullable);
    }

    // messages
    public static function invalidFinishStatusMessages()
    {
        return self::createMessage(\App\Enum\MogouFinishStatus::class, "Status must be one of the following: ");
    }

    public static function invalidStatusMessages()
    {
        return self::createMessage(\App\Enum\MogousStatus::class, "Status must be one of the following: ");
    }

    public static function invalidMogouTypeMessages()
    {
        return self::createMessage(\App\Enum\MogouTypeEnum::class, "Mogou type must be one of the following: ");
    }
}
