import { useRoutes } from "react-router-dom"

import { lazy, Suspense } from 'react';
import { ThemeProvider } from "@/components/theme-provider"
import useAuth from "@/hooks/useAuth.tsx";
import guestRoutes from "./guestRoute.tsx";
import authenticatedRoutes from "./authenticatedRoute.tsx";

const AdminLayout = lazy(() => import('../layouts/AdminLayout.tsx'));

const Fallback = lazy(() => import('../pages/Fallback.tsx'));

const AppRoute = () => {

  const isAuthenticated = useAuth();

  const commonRoutes = [
    {
      path: "*",
      element: isAuthenticated ?  <Fallback /> : <Fallback unauthorized />
    }];

  const coll = isAuthenticated ? authenticatedRoutes : guestRoutes;
  // const routes = [...guestRoutes, ...authenticatedRoutes,...commonRoutes];
  const routes = [...coll,...commonRoutes];


  const routeCollection = useRoutes([...routes]);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Suspense fallback={<AdminLayout title="Dashboard">
        <p>loading....</p>
      </AdminLayout>}>

        {routeCollection}
        
      </Suspense>
    </ThemeProvider>
  )
}

export default AppRoute