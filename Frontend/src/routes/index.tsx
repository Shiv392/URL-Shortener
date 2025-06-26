import { Routes, BrowserRouter as Router } from "react-router-dom";
import AuthRoute from "../features/auth/routes/index.tsx";
import DashboardRoute from "../features/dashboard/routes/index.tsx";
import AuthGuard from "../features/guard/auth_guard.tsx";

const AppRoutes=()=>{
  return(
    <Router>
    <AuthRoute />
    <AuthGuard>
      <DashboardRoute />
    </AuthGuard>
    </Router>
  )
}
export default AppRoutes;