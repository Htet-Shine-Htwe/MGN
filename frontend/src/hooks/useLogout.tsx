import { useNavigate } from "react-router-dom";
import { toast } from "@/components/ui/use-toast";
import Cookies from 'js-cookie';
import { useCallback } from "react";
import { useAppDispatch } from "@/redux/hooks";
import { adminLogout } from "@/redux/slices/admin-auth-slice";

const useLogout = () => {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const logout = useCallback((withToast=true) => {
    Cookies.remove('auth-token');

    withToast && toast({
      title: "Logged Out",
      description: "You have been logged out successfully",
      variant: "destructive",
    });
    dispatch(adminLogout())
    navigate("/login");
  }, [navigate]);

  return logout;
}

export default useLogout;
