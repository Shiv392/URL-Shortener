const mysql = require('../../db/dbConnection.js');
const table_name = require('../../constants/tablename.js')

const getshort_url = ({userid})=>{
const mysql_query = `select * from ${table_name.url_table_name} where userid=?`;
return new Promise((resolve,reject)=>{
    mysql.query(mysql_query,[userid],(err,urls)=>{
        if(err){
            console.log('error----->',err);
            return reject(err);
        }

        return resolve({success:true,message:'Record fetched succesfully',urls:urls})
    })
})
}
module.exports={getshort_url};