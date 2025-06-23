const express = require('express');
const routes = express.Router();
const {LoginController} = require('../controller/Login.js');
const {SignUpController} = require('../controller/SignUp.js');

const {verify_recaptcha} = require('../middleware/verify_recaptcha.js');

routes.post('/login',verify_recaptcha,LoginController);
routes.post('/signup',verify_recaptcha,SignUpController);

module.exports={routes};