import { Route, Routes } from "react-router-dom"

import { lazy, Suspense } from 'react';
import { ThemeProvider } from "@/components/theme-provider"


const AdminLayout = lazy(() => import('./layouts/AdminLayout'));
const Dashboard = lazy(() => import('./pages/admin/Dashboard'));
const Login = lazy(() => import('./pages/admin/Login'));
const Setting = lazy(() => import('./pages/admin/Setting'));
const Fallback = lazy(() => import('./pages/Fallback'));
const Action = lazy(() => import('./pages/admin/Comics/Action'));
const Users = lazy(()=>import('./pages/admin/Users'))
const AddUser = lazy(()=>import('./pages/admin/AddUser'))


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
          <Route path="/comics" element={<AdminLayout title="Comics"><Action /></AdminLayout>} />


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