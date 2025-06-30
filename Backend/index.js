const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const app = express();
const port = 8855;
const mysqlConnection = require('./db/dbConnection.js');
const {auth_routes} = require('./routes/User.js');
const {rateLimiter} = require('./middleware/rate-limiter.js');
const helmet = require('helmet');
const {JWT_Auth} = require('./middleware/jwt_auth.js')

app.use(cors());
app.use(bodyparser.json());
app.use(helmet())

app.use(rateLimiter);
app.use(auth_routes);

app.use(JWT_Auth)

mysqlConnection.connect((err)=>{
    if(err) console.log('error while connecting to databaes',err);
    else console.log('database connection successfull');
})

app.listen(port,()=>{
    console.log(`server started on http://localhost:${port}`);
})