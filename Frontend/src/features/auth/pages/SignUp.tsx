import React from 'react';
import SignUpForm from '../components/SignUpForm';
import { useSignup } from '../hooks/useSignuphook';

const SignUp=()=>{
    const {signup,data,loading,error} = useSignup();

    const onSubmit=async(form_values:{name:string,email:string,password:string})=>{
        await signup(form_values);
        console.log('signup res---->',data);
        if(data?.success){
            console.log('signup successfull----->');
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