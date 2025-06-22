import LoginForm from "../components/LoginForm";
import { useLogin } from "../hooks/useLoginhook";
import { useNotification } from "../../common/context/notificationcontext";

const Login=()=>{
    const {login, loading, data, error} = useLogin();
    const {show_success,show_error} = useNotification();

    const handle_login = async(form_values : {email : string, password : string,captcha_token:string})=>{
       if(!form_values.email || !form_values.password || !form_values.captcha_token){
        console.log('form is not filled------->');
        return;
       }
       const res = await login(form_values);
       console.log('login res------>',res);
       if(res?.success){
        show_success(res?.data?.message || '');
        sessionStorage.setItem('token',res.data?.user.token);
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