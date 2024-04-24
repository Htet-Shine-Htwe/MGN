import { IconType } from "react-icons/lib";
import { MdHomeFilled } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import { FaUsersGear } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";
import { SiBookstack } from "react-icons/si";
import { BiCategory } from "react-icons/bi";
import { MdSubscriptions } from "react-icons/md";

type navigateMenuItem = {
    title?: string,
    Icon: IconType,
    to: string,
    tooltip: string,
}

type navigateMenu = navigateMenuItem[];

export const navigateMenu: navigateMenu = [
    { Icon: MdHomeFilled, to: "/dashboard", tooltip: "home",title:"Home"},
    { Icon: SiBookstack, to: "/comics", tooltip: "Manga & Manhwas",title:"Manga & Manhwa"},
    { Icon: BiCategory, to: "/categories", tooltip: "Manage Categories",title:"Categories" },
    { Icon : MdSubscriptions , to : "/subscriptions", tooltip : "Manage Subscriptions",title:"Subscriptions"},
    { Icon: FaUsersGear, to: "/users", tooltip: "Manage Users" ,title:"Users"},
    { Icon: FaTelegram, to: "/sync/telegram", tooltip: "Your Telegram Channels",title:"Your Channel" },
    { Icon: IoSettings, to: "/setting", tooltip: "Cutomize Your Application",title:"Setting" },
];
