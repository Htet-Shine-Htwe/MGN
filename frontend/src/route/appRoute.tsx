import { useRoutes } from "react-router-dom"

import { lazy, Suspense } from 'react';
import { ThemeProvider } from "@/components/theme-provider"
import useAuth from "@/hooks/useAuth.tsx";
import guestRoutes from "./guestRoute.tsx";
import adminAuthenticatedRoutes from "./authenticatedRoute.tsx";
import NotFoundError from "@/pages/errors/not-found.tsx";
const AdminLayout = lazy(() => import('../layouts/AdminLayout.tsx'));

const AppRoute = () => {

  const adminIsAuthenticated = useAuth({adminGuard: true});
  const userIsAuthenticated = useAuth({adminGuard: false});

  const commonRoutes = [
    {
      path: "*",
      element: adminIsAuthenticated ? <NotFoundError /> : <NotFoundError />
    }];

  const coll = adminIsAuthenticated ? adminAuthenticatedRoutes : guestRoutes;
  // const routes = [...guestRoutes, ...authenticatedRoutes,...commonRoutes];
  const routes = [...coll, ...commonRoutes];

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