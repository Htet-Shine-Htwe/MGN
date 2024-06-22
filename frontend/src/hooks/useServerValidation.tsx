
const useServerValidation = () => {

  const handleServerErrors = (errors: any,setError : any) => {

    if (typeof errors != "object") {
      return;
    }

    Object.keys(errors).forEach((key) => {
      setError(key, {
        type: "manual",
        message: errors[key][0],
      });
    });
  };

  return { handleServerErrors };
};

export default useServerValidation;
