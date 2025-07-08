const mysql = require('../../db/dbConnection.js');
const table_name = require('../../constants/tablename.js');

const addshort_url = ({userid, original_url, short_url})=>{
const addurl_query = `insert into ${table_name.url_table_name} (userid,original_url,short_url) values (?,?,?)`;

return new Promise((resolve,reject)=>{
    mysql.query(addurl_query,[userid,original_url,short_url ],(err,result)=>{
        if(err){
            console.log('error---->',err);
           return reject(err);
        }

        return resolve({
            success:true,
            message:'Link has been added',
            url_id : result.insertId
        })
    })
})
}
module.exports={addshort_url};