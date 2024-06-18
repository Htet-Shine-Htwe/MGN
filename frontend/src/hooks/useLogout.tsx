import { useNavigate } from "react-router-dom";
import { toast } from "@/components/ui/use-toast";
import Cookies from 'js-cookie';
import { useCallback } from "react";

const useLogout = () => {
  const navigate = useNavigate();

  const logout = useCallback(() => {
    Cookies.remove('auth-token');

    toast({
      title: "Logged Out",
      description: "You have been logged out successfully",
      variant: "success",
    });

    navigate("/login");
  }, [navigate]);

  return logout;
}

export default useLogout;
