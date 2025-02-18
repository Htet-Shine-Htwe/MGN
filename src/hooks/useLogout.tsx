import { toast } from "@/components/ui/use-toast";
import { useCallback, useMemo } from "react";
import { useAppDispatch } from "@/redux/hooks";
import { adminLogout } from "@/redux/slices/admin-auth-slice";
import useSecureStorage from "./useSecureStorage";

const useLogout = () => {

  const dispatch = useAppDispatch();
  const {get} = useSecureStorage();

  const logout = useCallback((withToast=true) => {
    const navigateTo = get("auth-type") === "admin" ? '/admin/login' : '/login';
    localStorage.removeItem('auth-token');
    localStorage.removeItem("expiresAt");
    localStorage.removeItem("auth-type");
    localStorage.removeItem("user");

    withToast && toast({
      title: "Logged Out",
      description: "You have been logged out successfully",
      variant: "destructive",
    });
    dispatch(adminLogout())

    setTimeout(()=>{
      window.location.href = navigateTo;
    },2000);
  }, [dispatch, get]);

  return useMemo(() => logout, [logout]);
}

export default useLogout;
