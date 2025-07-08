const {addshort_url} = require('../../models/dashboard/addshort_url.js');

const addurls = async(req,res)=>{
const {userid} = req.user;
const {original_url, short_url} = req.body;

try{
const {success,message,url_id} = await addshort_url({userid,original_url,short_url});
return res.status(201).json({
    success:success,
    message:message,
    url_id : url_id
})
}
catch(err){
    return res.status(502).json({
        success:false,
        message:err
    })
}
}
module.exports={addurls};