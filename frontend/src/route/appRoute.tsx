import { useRoutes } from "react-router-dom"

import { lazy, Suspense } from 'react';
import { ThemeProvider } from "@/components/theme-provider"
import useAuth from "@/hooks/useAuth.tsx";
import guestRoutes from "./guestRoute.tsx";
import adminAuthenticatedRoutes from "./authenticatedRoute.tsx";
import NotFoundError from "@/pages/errors/not-found.tsx";
import { userAuthenticatedRoutes } from "./userRoute.tsx";
const AdminLayout = lazy(() => import('../layouts/AdminLayout.tsx'));

const AppRoute = () => {

  const adminIsAuthenticated = useAuth({adminGuard: true});
  const userIsAuthenticated = useAuth({adminGuard: false});

  const commonRoutes = [
    {
      path: "*",
      element: adminIsAuthenticated ? <NotFoundError /> : <NotFoundError />
    }];

  const adminRoutes = adminIsAuthenticated ? adminAuthenticatedRoutes : guestRoutes;
  const userRoutes =  userAuthenticatedRoutes ;

  // const routes = [...guestRoutes, ...authenticatedRoutes,...commonRoutes];
  const routes = [...adminRoutes,  ...userRoutes, ...commonRoutes];
  console.log(routes)

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