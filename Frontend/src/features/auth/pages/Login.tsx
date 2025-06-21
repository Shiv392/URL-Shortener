import React from "react";
import LoginForm from "../components/LoginForm";
import { useLogin } from "../hooks/useLoginhook";

const Login=()=>{
    const {login, loading, data, error} = useLogin();

    const handle_login = async(form_values : {email : string, password : string})=>{
        await login(form_values);
        console.log(data)
        if(data?.success){
            console.log('login successfull------->',data);
            sessionStorage.setItem('token',data.user.token);
        }
    }
return(
    <LoginForm 
    loading={loading}
    error = {error}
    success = {data?.success}
    message = {data?.message}
    submit = {handle_login}
     />
)
}
export default Login;