const {Login} = require('../../models/authentication/Login'); 

const LoginController=async(req,res)=>{
    const {email,password,captcha_token} = req.body;
  try{
   const {success,message,user} = await Login({email:email,password:password,captcha_token:captcha_token});
   if(!success){
    return res.status(404).json({success:false,message:message});
   }
   return res.status(200).json({success:true,message:message,user:user})
  }
  catch(err){
    console.log('errror---------->',err);
    return res.status(500).json({ success: false, message: 'Server Error' });
  }
}

module.exports={LoginController}