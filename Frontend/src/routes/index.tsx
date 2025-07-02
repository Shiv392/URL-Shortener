import { Routes, BrowserRouter as Router, useRoutes } from "react-router-dom";
import {AuthRoute} from "../features/auth/routes/index.tsx";
import {DashboardRoute} from "../features/dashboard/routes/index.tsx";
import AuthGuard from "../features/guard/auth_guard.tsx";
import { Suspense } from "react";

const routes = [...AuthRoute, ...DashboardRoute];

const AppRoutes=()=>{
  const element = useRoutes(routes);
  return(
    <Suspense>
      {element}
    </Suspense>
  )
}
export default AppRoutes;