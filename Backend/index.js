const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const app = express();
const port = 8800;
const dotenv = require('dotenv');
dotenv.config();

const mysqlConnection = require('./db/dbConnection.js');
const {auth_routes} = require('./routes/authentication/user.js');
const {rateLimiter} = require('./middleware/rate-limiter.js');
const helmet = require('helmet');

const {JWT_Auth} = require('./middleware/jwt_auth.js');
const {URL_Route} = require('./routes/dashboard/urlroutes.js');
const {google_auth_route} = require('./routes/oauthorization/google_auth_redirect.js');
const {google_callback_route} = require('./routes/oauthorization/google_auth_callback.js')

app.use(cors());
app.use(bodyparser.json());
app.use(helmet())

app.use(rateLimiter);
app.use(auth_routes);

// app.use(JWT_Auth);

app.use(URL_Route);
app.use(google_auth_route);
app.use(google_callback_route);

mysqlConnection.connect((err)=>{
    if(err) console.log('error while connecting to databaes',err);
})

app.listen(port,()=>{
    console.log(`server started on http://localhost:${port}`);
})