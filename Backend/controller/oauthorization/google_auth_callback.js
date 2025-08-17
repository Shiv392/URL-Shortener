const { get_google_tokens, get_googleruser_info } = require("../../services/google_auth_service");

const google_auth_callback = async(req,res)=>{
const {code} = req.query;
console.log('code---------->', code);
if(!code){
     return res.status(400).json({
      success: false,
      message: 'missing authorization code'
    })
}

try{
const {access_token, id_token} = await get_google_tokens(code);
if(!access_token){
    return res.status(500).json({sucess : false, message : 'Failed to get access from Google'});
}

const user_info = await get_googleruser_info(access_token);
console.log('user info-------->', user_info)
if (!user_info || !user_info.email) {
  return res.status(500).json({ success: false, message: 'Failed to get user information from google' });
}

return res.status(200).json({
    success : true,
    user : {
        email : user_info.email,
        name : user_info.name
    }
})
}
catch(err){
console.error('OAuth error:', err)
    res.status(500).json({
      success: false,
      message: err.message || err
    });
}
}
module.exports = {google_auth_callback}