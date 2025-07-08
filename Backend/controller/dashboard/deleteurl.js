const {delete_url} = require('../../models/dashboard/deleteshort_url');

const deleteurl = async(req,res)=>{
const {userid} = req.user;
const url_id = req.query.id;

console.log('url_id---->',url_id,'user id ---->',userid)

if(!url_id){
    return res.status(401).json({
        success:false,
        message : 'url id is required'
    })
}

try{
    const {success,message} = await delete_url({userid,url_id});
    return res.status(200).json({
        success:success,
        message:message
    })
}
catch(err){
    return res.status(502).json({
        success:false,
        message:err
    })
}
}
module.exports={deleteurl};
