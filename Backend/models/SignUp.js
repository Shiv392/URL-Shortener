const mysql = require('../db/dbConnection.js');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');
dotenv.config();

const SignUp=({name,email,password})=>{

return new Promise((resolve,reject)=>{
    const findUserByEmailQuery=`SELECT * FROM User WHERE email=?`;
    mysql.query(findUserByEmailQuery,[email],(err,user)=>{
        if(err){
            console.log('error while signup---->',err);
            reject(err);
        }

        if(user.length>0){
            return resolve({success:false,message:'Email already exists'});
        }
        else{
            bcrypt.hash(password,Number(process.env.SALT_ROUND),(hasherr,hashpassword)=>{
                if(hasherr){
                    console.log('hash error----->',err);
                    reject(err);
                }
                const insertUserQuery=`INSERT INTO User(name,email,password) VALUES(?,?,?)`;
                mysql.query(insertUserQuery,[name,email,hashpassword],(inserterr)=>{
                    if(inserterr){
                    console.log('insert user error----->',err);
                    reject(err);
                    }

                    return resolve({success:true,message:'SignUp has been successfully Completed'});
                })
            })
        }
    })
})

}
module.exports={SignUp};