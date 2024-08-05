import { MdHomeFilled } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import { FaUsersGear } from "react-icons/fa6";
import { SiBookstack } from "react-icons/si";
import { BiCategory } from "react-icons/bi";
import { MdSubscriptions } from "react-icons/md";
import { ElementType } from "react";
import { TbAppsFilled } from "react-icons/tb";
import { prefixRoutes } from "@/route/helper";

type MenuItem = {
    Icon: ElementType;
    to: string;
    tooltip: string;
    title: string;
};

type NavigateMenu = {
    [key: string]: MenuItem;
};

export interface ComicType {
  id: number;
  title: string;
};

export type AppRouteCollectionInterface = Record<string, string>;


const adminRoutes: AppRouteCollectionInterface = {
    dashboard: "/dashboard",
    comics: "/comics",
    comicsActions: "/comics/actions",
    categories: "/categories",
    subscriptions: "/subscriptions",
    addSubscription: "/subscriptions/add",
    editSubscription: "/subscriptions/edit/:id",
    users: "/users",
    addUser: "/add/user",
    apps: "/apps",
    setting: "/setting",
    generalSetting: "/setting/general",
    generalBanner: "/setting/banner",
};

export const navigateMenu: NavigateMenu = {
  dashboard: { Icon: MdHomeFilled, to: adminRoutes.dashboard, tooltip: "Home", title: "Home" },
  comics: { Icon: SiBookstack, to: adminRoutes.comics, tooltip: "comics", title: "Comics" },
  categories: { Icon: BiCategory, to: adminRoutes.categories, tooltip: "Manage Categories", title: "Categories" },
  subscriptions: { Icon: MdSubscriptions, to: adminRoutes.subscriptions, tooltip: "Manage Subscriptions", title: "Subscriptions" },
  users: { Icon: FaUsersGear, to: adminRoutes.users, tooltip: "Manage Users", title: "Users" },
  apps: { Icon: TbAppsFilled, to: adminRoutes.apps, tooltip: "Your Apps", title: "Apps" },
  setting: { Icon: IoSettings, to: adminRoutes.setting, tooltip: "Customize Your Application", title: "Setting" },
};


const userRoutes : AppRouteCollectionInterface = {
  home: "/",
  show: "/show/:slug",
  login : "/login"
}

export const adminRouteCollection = prefixRoutes('/admin', adminRoutes);
export const userRouteCollection = prefixRoutes('', userRoutes);

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
  