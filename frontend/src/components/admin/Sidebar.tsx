import { MdHomeFilled } from "react-icons/md";
import { IoLogOutSharp } from "react-icons/io5";
import { FaUsersGear } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";
import { SiBookstack } from "react-icons/si";


import SidebarIcon from "../ui/SidebarIcon";

const Sidebar = () => {
  return (
    <div className="bg-primary w-[80px] h-[90vh] rounded-3xl">
        <div className="flex flex-col gap-8 pt-6 h-[90%]" >
           
           <SidebarIcon Icon={MdHomeFilled} to="dashboard" tooltip="home"/>
           <SidebarIcon Icon={FaUsersGear}  to="users" tooltip="Manage Users" />
           <SidebarIcon Icon={SiBookstack} to="comics" tooltip="Manga & Manhwas"/>
           <SidebarIcon Icon={FaTelegram} to="sync/telegram" tooltip="Your Telegram Channels"/>

        </div>


        <hr className="border-t-2 border-gray-300 w-10/12 mx-auto" />
        <div className="flex flex-col justify-center h-[10%]  ">
            <SidebarIcon Icon={IoLogOutSharp} to="" tooltip=""/>
        </div>
    </div>
  )
}

export default Sidebar