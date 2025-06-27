import LoginForm from "../components/LoginForm";
import { useLogin } from "../hooks/useLoginhook";
import { useNotification } from "../../common/context/notificationcontext";
import { useNavigate } from "react-router-dom";
import { useLoader } from "../../common/context/loadercontext";
import { useEffect } from "react";
import { useCookies } from "react-cookie";

const Login=()=>{
    const {login, loading, data, error} = useLogin();
    const {show_success,show_error} = useNotification();
    const navigate = useNavigate();
    const {show_loader,off_loader} = useLoader();
    const [cookies,setCookies] = useCookies(['auth_token']);

    const handle_login = async(form_values : {email : string, password : string,captcha_token:string})=>{
       if(!form_values.email || !form_values.password || !form_values.captcha_token){
        console.log('form is not filled------->');
        return;
       }
       show_loader();
       const res = await login(form_values);
       console.log('login res------>',res);
       off_loader();
       if(res?.success){
        show_success(res?.data?.message || '');
        // localStorage.setItem('token',res.data?.user.token);
        //token will expire in one day 
        setCookies('auth_token',res.data?.user.token,{path:'/',maxAge:60*60*24});
        navigate('/app');
       }
       else{
        show_error(res?.error || '')
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