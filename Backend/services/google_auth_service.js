const axios = require('axios');
const {urls} = require('../constants/google_url')

const get_google_tokens = async(code)=>{
try{
   const response = await axios.post(urls.google_auth_token,{
    code,
    client_id : process.env.GOOGLE_CLIENT_ID,
    client_secret : process.env.GOOGLE_CLIENT_SECRET,
    redirect_uri : process.env.GOOGLE_REDIRECT_URI,
    grant_type: 'authorization_code'
   });

   return response.data
}
catch(err){
 console.log('error while fetching tokens from google auth---->', err.response?.data || err.message);
 throw new Error('Failed to retrives tokens from Google');
}
}

const get_googleruser_info = async(access_token)=>{
    try{
     const user_info = await axios.get(urls.google_user_info,{
        headers : {
            Authorization : `Bearer ${access_token}`
        }
     });

     console.log('google user info------>', user_info);
     return user_info.data;
    }
    catch(err){
     console.error('Error fetching user info from Google:', err.response?.data || err.message);
     throw new Error('Failed to retrieve user info from Google');
    }
}

module.exports = {get_google_tokens, get_googleruser_info}