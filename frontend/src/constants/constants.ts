import { MdHomeFilled } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import { FaUsersGear } from "react-icons/fa6";
import { SiBookstack } from "react-icons/si";
import { BiCategory } from "react-icons/bi";
import { MdSubscriptions } from "react-icons/md";
import { ElementType } from "react";
import { TbAppsFilled } from "react-icons/tb";

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
    apps: { Icon: TbAppsFilled, to: "/apps", tooltip: "Your Apps", title: "Apps" },
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
    apps: "/apps",
};

interface ComicType {
    id: number;
    title: string;
};

interface ComicProgress extends ComicType {};

export const ComicType : ComicType[]  = [
    {
      id: 0,
      title: 'Manga',
    },
    {
      id: 1,
      title: 'Manhwa',
    },
    {
      id: 2,
      title: 'Comic',
    }
  
]

export const ComicProgress : ComicProgress[]  = [
    {
      id: 0,
      title: 'Ongoing',
    },
    {
      id: 1,
      title: 'Completed',
    },
    {
      id: 2,
      title: 'Dropped',
    }
  
  ]
  