import { IoLogOutSharp } from "react-icons/io5";
import SidebarIcon from "../ui/SidebarIcon";
import AlertBox from "../ui/AlertBox";
import { memo } from "react";
import useLogout from "@/hooks/useLogout";
import { navigateMenu } from "./data/data";

const SidebarRaw = () => {
  const icons = navigateMenu;
  const logout = useLogout();

  return (
    <div className="bg-popover dark:bg-primary-muted  w-[80px] h-full rounded-3xl shadow-lg ">
      <div className="flex flex-col gap-8 pt-6 h-[90%] overflow-y-scroll">
        
        {Object.keys(icons).map((key) => {
          const { Icon, to, tooltip } = icons[key];
          return (
            <SidebarIcon key={key} Icon={Icon} to={to} tooltip={tooltip} />
          );
        })}
      </div>
      <hr className="border-t-2 border-gray-300 w-10/12 mx-auto" />
      <div className="flex flex-col justify-center h-[10%] ">
        <AlertBox
          alertTitle="Logout"
          alertDescription="Are you sure you want to logout?"
          alertActionConfirmText="Logout"
          alertConfirmAction={logout}
          btnText={
            <SidebarIcon
              Icon={IoLogOutSharp}
              to="#"
              tooltip="logout"
            />
          }
        />
      </div>
    </div>
  );
}

const isSameSideBar = (prevProps :any, nextProps:any) => {
  return Object.keys(prevProps).every(key => prevProps[key] === nextProps[key]);
}

const Sidebar = memo(SidebarRaw, isSameSideBar);
export default Sidebar;
