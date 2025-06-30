const mysql = require('../../db/dbConnection.js');

const get_urls=({userid,email})=>{
    console.log('userid------>',userid,'emial------->',email);

    return new Promise((resolve,reject)=>{
    const get_url_query = `select * from urls where userid = ?`;

    mysql.query(get_url_query,[userid], (err,urls)=>{
    if(err){
        console.error('Error fetching URLs:', err);
        return reject(err);
    }
    else{
        return resolve({success:true,urls:urls,message:'URL fetch successfully'});
    }
    })
    })
}
module.exports={get_urls};