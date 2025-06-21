import { Signup } from "../services/signupservice";

export const signup_controller = async (formData : any)=>{
    try{
     const signup_res = await Signup(formData);
     return {success : true, data : signup_res.data};
    }
    catch(err : any){
     return {success : false, error : err.response?.data.message}
    }
}