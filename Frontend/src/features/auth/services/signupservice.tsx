import axios from "axios";
import { controller } from "../../../controller/controller";
import { environment } from "../../../environments/environments";

export const Signup=async(payload : any)=>{
  const signup_res = await axios.post(environment+controller.signup,payload);
  console.log('signup api res---------->',signup_res);
  return signup_res.data;
}
