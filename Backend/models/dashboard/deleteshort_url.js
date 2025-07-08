const mysql = require('../../db/dbConnection.js');
const {url_table_name} = require('../../constants/tablename.js');

const delete_url = ({user_id, url_id})=>{
const deleteurl_query = `delete from ${url_table_name} where userid=? and url_id=?`;

return new Promise((resolve,reject)=>{
    mysql.query(deleteurl_query,[user_id, url_id],(err,result)=>{
    if(err){
        console.log('error---->',err);
        return reject(err);
    }
    console.log('res--->',result);
    if(result.affectedRows==0){
        return resolve({success:false,message:'No URL found or unauthorized action'});
    }
    return resolve({
        success:true,
        message:'URL sucessfully deleted'
    })
})
})
}
module.exports={delete_url};