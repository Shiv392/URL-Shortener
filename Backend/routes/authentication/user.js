const express = require('express');
const auth_routes = express.Router();
const {LoginController} = require('../../controller/authentication/Login.js');
const {SignUpController} = require('../../controller/authentication/SignUp.js');

const {verify_recaptcha} = require('../../middleware/verify_recaptcha.js');

auth_routes.post('/login',verify_recaptcha,LoginController);
auth_routes.post('/signup',verify_recaptcha,SignUpController);

module.exports={auth_routes};