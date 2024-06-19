/* eslint-disable @typescript-eslint/no-explicit-any */
import { toast } from "@/components/ui/use-toast"
import { usePostDataMutation } from "@/redux/api/queryApi";
import useLogout from "./useLogout";
import { NavigateFunction, useNavigate } from "react-router-dom";
// import { useAppDispatch } from "@/redux/hooks";

type MethodType = "GET" | "POST" | "PUT" | "DELETE";

type ReturnType = [
  (
    url: string,
    values?: any | undefined,
    method?: MethodType,
    isFormData?: boolean
  ) => Promise<string | void>,
  { isLoading: boolean }
];

type ParamsType = {
  callback?: (value: any, navigate: NavigateFunction) => void;
  navigateBack?: boolean;
  disableAlert?: boolean;
  disableInvalidate?: boolean;
};

const useMutate = (params: ParamsType = {}): ReturnType => {
  const {
    callback,
    navigateBack = true,
    disableAlert = false,
    disableInvalidate = false,
  } = params;

  const logout = useLogout();
  const navigate = useNavigate();
  const [mutate, { isLoading }] = usePostDataMutation();

  const onSubmit = async (
    url: string,
    values: any | undefined = undefined,
    method: MethodType = "POST"
  ) => {
    const { data, error } = (await mutate({
      url,
      method,
      body: values ?? {},
    })) as any;

    if (error) {
      if (error?.status === 401) {
        toast({
            title: "Unauthorized",
            description: "You have been logged out",
            variant: "destructive",
        })

        return logout();
      }

        toast({
            title: "Error",
            description: error?.data?.message || "Something went wrong",
            variant: "destructive",
        })
        return error;
    }

    if (data?.message) {
      if (!disableAlert) toast({
        title: "Success",
        description: data?.message,
        variant: "success",
      })

      
    }

    if (callback) {
      return callback(data.data, navigate);
    }

    if (navigateBack && method !== "DELETE") {
      return navigate(-1);
    }
  };

  return [onSubmit, { isLoading }];
};

export default useMutate;