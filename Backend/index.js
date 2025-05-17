const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const app = express();
const port = 8855;
const mysqlConnection = require('./db/dbConnection.js');

app.use(cors());
app.use(bodyparser.json());

app.get('/',(req,res)=>{
    return res.status(200).send(`<h1>Home Page</h1>`)
})

mysqlConnection.connect((err)=>{
    if(err) console.log('error while connecting to databaes',err);
    else console.log('database connection successfull');
})


app.listen(port,()=>{
    console.log(`server started on http://localhost:${port}`);
})