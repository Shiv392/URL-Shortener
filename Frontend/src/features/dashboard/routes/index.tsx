import { lazy } from "react";
import { Route,Routes } from "react-router-dom";

const Dashboard = lazy(()=> import('../pages/dashboard.tsx'));

const DashboardRoute=()=>{
    return(
        <Routes>
            <Route path='/app' element={<Dashboard />}></Route>
        </Routes>
    )
}

export default DashboardRoute;