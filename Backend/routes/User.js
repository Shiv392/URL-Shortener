const express = require('express');
const routes = express.Router();
const {LoginController} = require('../controller/Login.js');
const {SignUpController} = require('../controller/SignUp.js');

routes.post('/login',LoginController);
routes.post('/signup',SignUpController);

module.exports={routes};