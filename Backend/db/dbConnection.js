const mysql = require('mysql');
const dotenv = require('dotenv');
dotenv.config();

const mysqlConnection=mysql.createConnection({
    database:process.env.DATABASE_NAME,
    user:process.env.USER,
    password:process.env.DATABASE_PASSWORD,
    host:process.env.HOST
})

module.exports=mysqlConnection;