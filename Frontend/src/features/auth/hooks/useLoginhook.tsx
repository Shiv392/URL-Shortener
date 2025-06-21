import { useState } from "react";
import { login_controller } from "../controllers/login_controller";

type login_payload = {
    email : string
    password : string
}

type login_response = {
    success : boolean
    message? : string
    user : {
        email : string
        userId : number
        token : string
    }
}

export const useLogin=()=>{
    const [loading,setLoading] = useState<boolean>(false);
    const [error,setError] = useState<string | null>(null);
    const [data,setData] = useState<login_response | null>(null);

    const login = async (form_data : login_payload)=>{
        setLoading(true);
        setError(null);
        setData(null);

        try{
        const response = await login_controller(form_data);
        console.log('response----->',response);
        if(response.success){
            setData(response.data);
        }
        else{
            setError(response.error);
        }
        }
        catch(err : any){
         setError(err.message || "Unexpected error occurred");
        }
        finally{
            setLoading(false);
        }
    }

    return {login,loading,data,error}
}