const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const JWT_Auth = (req,res,next)=>{
console.log('req----->',req.headers);
const authHeaders = req.headers['authorization'];
const Auth_Token = authHeaders;

if(!Auth_Token){
    return res.status(403).json({
        success:false,message:'Invalid access'
    })
}
else{
jwt.verify(Auth_Token, process.env.JWT_SECRET_KEY,(err,match)=>{
    if(err){
        return res.status(401).json({
                success: false,
                message: 'Invalid or expired token.',
        });
    }
    req.user = match;
    next();
})

}

}

module.exports={JWT_Auth}