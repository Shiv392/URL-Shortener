const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();

const recaptcha_secret_key = '6LdSamkrAAAAABkFOuMgo-WcYWAoZVBtlQ8gX8wC';

const verify_recaptcha = async(req,res,next)=>{
    const {captcha_token} = req.body;
    if(!captcha_token){
        return res.status(400).json({success:false,message:'captcha token required'});
    }

    try{
       const response = await axios.post(`https://www.google.com/recaptcha/api/siteverify`,null,{
        params:{
            secret : process.env.reCaptcha_SECRET_KEY,
            response :captcha_token
        }
       });

       const data= response.data;
       if(!data.success || data.score<0.5){
        return res.status(403).json({success: false, message : 'reCaptcha validation failed'});
       }
       next();
    }
    catch(err){
    console.error('reCAPTCHA verification error:', err);
    return res.status(502).json({ success: false, message: 'reCAPTCHA server error' });
    }
}

module.exports={verify_recaptcha};