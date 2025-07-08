const {getshort_url} = require('../../models/dashboard/getshort_url.js');

const geturl_list = async(req,res)=>{
const {userid} = req.user; //getting userid from the user object, adding after login. ----------->

try{
 const {success,urls,message} = await getshort_url({userid});
 return res.status(200).json({
    success:success,
    message:message,
    urls:urls
 })
}
catch(err){
    return res.status(502).json({
        success:false,
        message:err
    })
}
}
module.exports={geturl_list}