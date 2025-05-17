const mysql = require('mysql');

const mysqlConnection=mysql.createConnection({
    database:'urlshortener',
    user:'root',
    password:'Shiv@3923',
    host:'localhost'
})

module.exports=mysqlConnection;