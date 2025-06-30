const mysql = require('../../db/dbConnection.js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');
dotenv.config();

const Login=({email,password})=>{
return new Promise((resolve,reject)=>{
    const findEmailQuery=`SELECT * FROM User WHERE email=?`;
    mysql.query(findEmailQuery,[email],(err,user)=>{
        if(err){
            console.log('email find error----->',err);
            return reject(err);
        }
        if(user.length==0){ //no user found with this email
       return resolve({success:false,user:[],message:'Email Not found'})
        }
        
        const matchedUser= user[0];
        bcrypt.compare(password,matchedUser.password).then((ismatch)=>{
        if(!ismatch){
            return resolve({success:false,message:'Password not match',user:[]})
        }
        else{
            const jwttoken=jwt.sign({userid:user[0].userid,email:user[0].email}, process.env.JWT_SECRET_KEY, {expiresIn:'1hr'});
            return resolve({success:true,message:'Login Successfull',user:{email:matchedUser.email,userId:matchedUser.userid,token:jwttoken}})
        }
        })
        .catch((hasherr)=>{
            console.log('hash error in password----->',hasherr);
            return reject(hasherr);
        })
    })
})
}
module.exports={Login};