import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import type { RouteObject } from 'react-router-dom';

const Login=lazy(()=> import('../pages/Login.tsx'));
const SignUp=lazy(()=> import('../pages/SignUp.tsx'));

export const AuthRoute : RouteObject[] = [
    {
        path:'/',element : <Login />
    },
    {
        path : '/signup', element : <SignUp />
    }
]