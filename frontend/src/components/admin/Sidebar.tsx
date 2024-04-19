
import { IoLogOutSharp } from "react-icons/io5";


import SidebarIcon from "../ui/SidebarIcon";
import AlertBox from "../ui/AlertBox";
import { useNavigate } from "react-router-dom";
import { toast } from "../ui/use-toast";
import { memo, useCallback } from "react";
import { navigateMenu } from "@/constants/constants";

const SidebarRaw = () => {

  const navigate = useNavigate();

  const icons = navigateMenu;

  const redirectToLogin = useCallback(()=>{
   
      toast({
        title: "Logout",
        description: "You have been logged out successfully",
        variant: "success",
      })
      navigate("/login");
    
  },[navigate])

  return (
    <div className="bg-primary w-[80px] h-[90vh] rounded-3xl">
        <div className="flex flex-col gap-8 pt-6 h-[90%]" >

          {
            icons.map((icon,index)=>(
              <SidebarIcon key={index} Icon={icon.Icon} to={icon.to} tooltip={icon.tooltip} />
            ))
          }
        </div>


        <hr className="border-t-2 border-gray-300 w-10/12 mx-auto" />
        <div className="flex flex-col justify-center h-[10%]  ">

            <AlertBox alertTitle="Logout" alertDescription="Are you sure you want to logout?" alertActionConfirmText="Logout" alertConfirmAction={()=>redirectToLogin()} 
            btnText={ <SidebarIcon Icon={IoLogOutSharp} to="/logout" tooltip="logout"  onClick={()=>{}}/>}/>
        </div>
    </div>
  )
}
const Sidebar = memo(SidebarRaw)
export default Sidebar