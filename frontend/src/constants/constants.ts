import { IconType } from "react-icons/lib";
import { MdHomeFilled } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import { FaUsersGear } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";
import { SiBookstack } from "react-icons/si";
import { BiCategory } from "react-icons/bi";
import { MdSubscriptions } from "react-icons/md";
import { ElementType } from "react";


type MenuItem = {
    Icon: ElementType;
    to: string;
    tooltip: string;
    title: string;
};

type NavigateMenu = {
    [key: string]: MenuItem;
};

export const navigateMenu: NavigateMenu = {
    dashboard: { Icon: MdHomeFilled, to: "/dashboard", tooltip: "Home", title: "Home" },
    comics: { Icon: SiBookstack, to: "/comics", tooltip: "comics", title: "Comics" },
    categories: { Icon: BiCategory, to: "/categories", tooltip: "Manage Categories", title: "Categories" },
    subscriptions: { Icon: MdSubscriptions, to: "/subscriptions", tooltip: "Manage Subscriptions", title: "Subscriptions" },
    users: { Icon: FaUsersGear, to: "/users", tooltip: "Manage Users", title: "Users" },
    telegram: { Icon: FaTelegram, to: "/sync/telegram", tooltip: "Your Telegram Channels", title: "Channel" },
    setting: { Icon: IoSettings, to: "/setting", tooltip: "Customize Your Application", title: "Setting" },
};


export const adminRouteCollection: Record<string, string> = {
    dashboard: "/dashboard",
    setting: "/setting",
    comics: "/comics",
    comicsActions: "/comics/actions",
    categories: "/categories",
    subscriptions: "/subscriptions",
    addSubscription: "/subscriptions/add",
    editSubscription: "/subscriptions/edit/:id",
    users: "/users",
    addUser: "/add/user",
};
