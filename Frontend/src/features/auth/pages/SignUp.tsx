import { useNotification } from '../../common/context/notificationcontext';
import SignUpForm from '../components/SignUpForm';
import { useSignup } from '../hooks/useSignuphook';

const SignUp=()=>{
    const {show_success,show_error} = useNotification();
    const {signup,data,loading,error} = useSignup();

    const onSubmit=async(form_values:{name:string,email:string,password:string,captha_token:string})=>{
        const res = await signup(form_values);
        console.log('signup res---->',res);
        if(res?.success){
            console.log('signup successfull----->');
            show_success(res.data?.message)
        }
        else{
         show_error(res?.error);
        }
    }

return(
    <SignUpForm
    loading={loading}
    error = {error}
    success = {data?.success}
    message = {data?.message}
    onsubmit = {onSubmit}
    />
)
}
export default SignUp;