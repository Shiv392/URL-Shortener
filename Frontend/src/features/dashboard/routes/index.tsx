import { lazy } from "react";
import {type RouteObject } from "react-router-dom";
import AuthGuard from "../../guard/auth_guard.tsx";

const Dashboard = lazy(()=> import('../pages/dashboard.tsx'));

export const DashboardRoute : RouteObject[] =[
    {
        path:'/app', element : (
            <AuthGuard>
                <Dashboard />
            </AuthGuard>
        )
    }
]