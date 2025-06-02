import { Routes, BrowserRouter as Router } from "react-router-dom";
import AuthRoute from "../features/auth/routes/index.tsx";

const AppRoutes=()=>{
  return(
    <Router>
    <AuthRoute />
    </Router>
  )
}
export default AppRoutes;