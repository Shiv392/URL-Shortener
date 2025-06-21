import axios from "axios";
import { controller } from "../../../controller/controller";
import { environment } from "../../../environments/environments";

export const Login=async(payload : any)=>{
  const login_res = await axios.post(environment+controller.login,payload);
  console.log('login api res---------->',login_res);
  return login_res;
}
