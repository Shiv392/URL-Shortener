const express = require('express');
const google_auth_route = express.Router();
const {google_auth_redirect} = require('../../controller/oauthorization/google_auth_redirect'); 

google_auth_route.get('/auth/google', google_auth_redirect);

module.exports = {google_auth_route}