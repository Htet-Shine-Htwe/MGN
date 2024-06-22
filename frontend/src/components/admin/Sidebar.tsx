
import { IoLogOutSharp } from "react-icons/io5";
import SidebarIcon from "../ui/SidebarIcon";
import AlertBox from "../ui/AlertBox";
import { memo } from "react";
import { navigateMenu } from "@/constants/constants";
import Logo from "@/assets/imgs/logo-icon.png";
import useLogout  from "@/hooks/useLogout";


const SidebarRaw = () => {

  const icons = navigateMenu;
  const logout = useLogout();

  return (
    <div className="bg-primary w-[80px] h-[90vh] rounded-3xl sticky ">
        <div className="flex flex-col gap-8 pt-6 h-[90%]" >

          <div className="flex justify-center">
            <img src={Logo} alt="logo" className="w-12 hover:motion-safe:animate-spin-slow cursor-pointer " />
          </div>

          {
            icons.map((icon,index)=>(
              <SidebarIcon key={index} Icon={icon.Icon} to={icon.to} tooltip={icon.tooltip} />
            ))
          }
        </div>


        <hr className="border-t-2 border-gray-300 w-10/12 mx-auto" />
        <div className="flex flex-col justify-center h-[10%]  ">

            <AlertBox alertTitle="Logout" alertDescription="Are you sure you want to logout?" alertActionConfirmText="Logout" alertConfirmAction={logout} 
            btnText={ <SidebarIcon Icon={IoLogOutSharp} to="/logout" tooltip="logout"  onClick={()=>{}}/>}/>
        </div>
    </div>
  )
}
const Sidebar = memo(SidebarRaw)
export default Sidebar