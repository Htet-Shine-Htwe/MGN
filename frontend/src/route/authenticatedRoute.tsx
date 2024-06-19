import { lazy } from "react";
import { AppRouteInterface } from "./type";

const AdminLayout = lazy(() => import('@/layouts/AdminLayout.tsx'));
const Dashboard = lazy(() => import('@/pages/admin/Dashboard.tsx'));

const Setting = lazy(() => import('../pages/admin/Setting.tsx'));
const Action = lazy(() => import('../pages/admin/Comics/Action.tsx'));
const Users = lazy(() => import('../pages/admin/Users/Users.tsx'));
const AddUser = lazy(() => import('../pages/admin/Users/AddUser.tsx'));
const CategoryIndex = lazy(() => import('../pages/admin/Category/CategoryIndex.tsx'));
const SubscriptionIndex = lazy(() => import('../pages/admin/Subscription/SubscriptionIndex.tsx'));
const SubscriptionCreateEdit = lazy(() => import('../pages/admin/Subscription/SubscriptionCreateEdit.tsx'));
const ComicIndex = lazy(() => import('../pages/admin/Comics/Index.tsx'));

const authenticatedRoutes : AppRouteInterface[] = [
    {
        path: '/',
        element : (
            <AdminLayout title="Dashboard">
                <Dashboard />
            </AdminLayout>
        )
    },
        {
        path: '/dashboard',
        element: (
          <AdminLayout title="Dashboard">
            <Dashboard />
          </AdminLayout>
        )
      },
      {
        path: '/setting',
        element: (
          <AdminLayout title="Setting">
            <Setting />
          </AdminLayout>
        )
      },
      {
        path: '/comics',
        element: (
          <AdminLayout title="Comics">
            <ComicIndex />
          </AdminLayout>
        )
      },
      {
        path: '/comics/actions',
        element: (
          <AdminLayout title="Comics">
            <Action />
          </AdminLayout>
        )
      },
      {
        path: '/categories',
        element: (
          <AdminLayout title="Categories">
            <CategoryIndex />
          </AdminLayout>
        )
      },
      {
        path: '/subscriptions',
        element: (
          <AdminLayout title="Subscriptions">
            <SubscriptionIndex />
          </AdminLayout>
        )
      },
      {
        path: '/subscriptions/add',
        element: (
          <AdminLayout title="New Subscription">
            <SubscriptionCreateEdit />
          </AdminLayout>
        )
      },
      {
        path: '/users',
        element: (
          <AdminLayout title="Subscribed Users">
            <Users />
          </AdminLayout>
        )
      },
      {
        path: '/add/user',
        element: (
          <AdminLayout title="Register New User">
            <AddUser />
          </AdminLayout>
        )
      }
];

export default authenticatedRoutes;