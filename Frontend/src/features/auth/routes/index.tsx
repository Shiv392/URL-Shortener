import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
const Login=lazy(()=> import('../pages/Login.tsx'));
const SignUp=lazy(()=> import('../pages/SignUp.tsx'));

const AuthRoute=()=>{
return (
    <Routes>
    <Route element={<Login />} path='/login'></Route>
    <Route element={<SignUp />} path='/signup'></Route>
    </Routes>      
)
}
export default AuthRoute;