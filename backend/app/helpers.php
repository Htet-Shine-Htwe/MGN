<?php

if(!function_exists('tryCatch')){

    function tryCatch($callback, $message = null){
        try{
            return $callback();
        }catch(\Exception $e){

            $status = 500;
            if($e instanceof \Illuminate\Validation\ValidationException){
                $status = 422;
                return response()->json([
                    'message' => 'Validation failed',
                    'errors' => $e->errors()
                ],$status);
            }
            if($message){
                return response()->json(['message' => $message],$status);
            }
            return response()->json(['message' => $e->getMessage()],$status);
        }
    }

}
