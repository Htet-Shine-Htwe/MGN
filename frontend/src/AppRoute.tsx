import { Route, Routes } from "react-router-dom"
import AdminLayout from "./layouts/AdminLayout"
import Dashboard from "./pages/admin/Dashboard"

const AppRoute = () => {

  
  return (
    <Routes>
        <Route path="/"  element={<AdminLayout><Dashboard /></AdminLayout>}/>
    </Routes>
  )
}

export default AppRoute