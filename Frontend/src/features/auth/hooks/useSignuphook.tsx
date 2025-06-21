import { useState } from "react";
import { signup_controller } from "../controllers/signup_controller";

type signup_payload={
    name : string
    email : string
    password : string
}

type signup_response = {
    success : boolean
    message : string
}

export const useSignup=()=>{
    const [loading,setLoading] = useState<boolean>(false);
    const [error,setError] = useState<string | null>(null);
    const [data,setData] = useState<signup_response | null>(null);

    const signup = async(form_data : signup_payload)=>{
        setLoading(true);
        setError(null);
        setData(null);

        try{
        const response = await signup_controller(form_data);
        if(response.success){
        setData(response.data);
        }
        else{
        setError(response.error)
        }
        return response;
        }
        catch(err : any){
         setError(err.message || "Unexpected error occurred")
        }
        finally{
            setLoading(false);
        }
    }

    return {signup,loading,data,error}

}