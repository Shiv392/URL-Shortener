import { Routes, BrowserRouter as Router } from "react-router-dom";
import AuthRoute from "../features/auth/routes/index.tsx";
import DashboardRoute from "../features/dashboard/routes/index.tsx";

const AppRoutes=()=>{
  return(
    <Router>
    <AuthRoute />
    <DashboardRoute />
    </Router>
  )
}
export default AppRoutes;