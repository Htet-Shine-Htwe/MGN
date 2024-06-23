import { toast } from "@/components/ui/use-toast";

const useServerValidation = () => {

  const handleServerErrors = (errors: any,setError : any) => {
    if (typeof errors != "object") {
      return;
    }

    ( errors.data.errors) && Object.keys(errors.data.errors).forEach((key) => {
      setError(key, {
        type: "manual",
        message: errors.data.errors[key][0],
      });
    });

    errors.error && toast({
      title: "❗️Error",
      description: errors.error,
      variant: "destructive",
    });

   


  };

  return { handleServerErrors };
};

export default useServerValidation;
