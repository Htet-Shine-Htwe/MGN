<?php

namespace App\Vaildations;

class MogouValidation
{
    public static function finishStatus()
    {
        $values = implode(',', \App\Enum\MogouFinishStatus::getValues());
        return 'required|in:'.$values;
    }


    public static function status()
    {
        $values = implode(',', \App\Enum\MogousStatus::getValues());
        return 'required|in:'.$values;
    }

    // messages
    public static function invalidFinishStatusMessages()
    {
        return "Status must be one of the following: ".implode(',', \App\Enum\MogouFinishStatus::getValues());
    }

    public static function invalidStatusMessages()
    {
        return "Status must be one of the following: ".implode(',', \App\Enum\MogousStatus::getValues());
    }

}
