import { lazy } from "react";
import { AppRouteInterface } from "./type";


const UserLayout = lazy(() => import('@/layouts/UserLayout.tsx'));
const HomePage = lazy(() => import('@/pages/users/home/Index.tsx'));


export const userAuthenticatedRoutes: AppRouteInterface[] = [
    {
      path: '/',
      element: (
        <UserLayout title="">
          <HomePage />
        </UserLayout>
      ),
      }
  ];