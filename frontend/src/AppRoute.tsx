import { Route, Routes } from "react-router-dom"

import { lazy, Suspense } from 'react';
import { ThemeProvider } from "@/components/theme-provider"
import Index from "./pages/admin/Comics/Index";


const AdminLayout = lazy(() => import('./layouts/AdminLayout'));
const Dashboard = lazy(() => import('./pages/admin/Dashboard'));
const Login = lazy(() => import('./pages/admin/Login'));
const Setting = lazy(() => import('./pages/admin/Setting'));
const Fallback = lazy(() => import('./pages/Fallback'));
const Action = lazy(() => import('./pages/admin/Comics/Action'));
const Users = lazy(()=>import('./pages/admin/Users/Users.tsx'))
const AddUser = lazy(()=>import('./pages/admin/Users/AddUser'))
const CategoryIndex = lazy(()=>import('./pages/admin/Category/CategoryIndex'))
const SubscriptionIndex = lazy(()=>import('./pages/admin/Subscription/SubscriptionIndex'))
const SubscriptionCreateEdit = lazy(()=>import('./pages/admin/Subscription/SubscriptionCreateEdit'))


const AppRoute = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Suspense fallback={<AdminLayout title="Dashboard">
        <p>loading....</p>
      </AdminLayout>}>

        
        <Routes>

          <Route path="/" element={<AdminLayout title="Dashboard"><Dashboard /></AdminLayout>} />
          <Route path="/dashboard" element={<AdminLayout title="Dashboard"><Dashboard /></AdminLayout>} />
          <Route path="/setting" element={<AdminLayout title="Setting"><Setting /></AdminLayout>} />


          <Route path="/comics" element={<AdminLayout title="Comics"><Index /></AdminLayout>} />
          <Route path="/comics/actions" element={<AdminLayout title="Comics"><Action /></AdminLayout>} />

          <Route path="/categories" element={<AdminLayout title="Categories"><CategoryIndex /></AdminLayout>} />

          <Route path="/subscriptions" element={<AdminLayout title="Subscriptions"><SubscriptionIndex /></AdminLayout>} />
          <Route path="/subscriptions/add" element={<AdminLayout title="New Subscription"><SubscriptionCreateEdit /></AdminLayout>} />

          <Route path="/users" element={<AdminLayout title="Subscribed Users"><Users /></AdminLayout>} />
          <Route path="/add/user" element={<AdminLayout title="Register New User"><AddUser /></AdminLayout>} />


          <Route path="/login" element={<Login></Login>} />


          <Route path="*" element={<Fallback />} />
        </Routes>
      </Suspense>
    </ThemeProvider>
  )
}

export default AppRoute