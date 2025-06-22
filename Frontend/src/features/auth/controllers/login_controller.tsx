import { Login } from "../services/loginservice";

export const login_controller = async (formData : any)=>{
    try{
      const login_res = await Login(formData);
      return {success : true, data : login_res.data};
    }
    catch(err : any){
     return {success : false, error : err.response?.data.message || 'Something went wrong'}
    }
}