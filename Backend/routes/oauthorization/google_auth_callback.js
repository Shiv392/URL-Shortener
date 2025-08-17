const express = require('express');
const google_callback_route = express.Router();
const {google_auth_callback} = require('../../controller/oauthorization/google_auth_callback');

google_callback_route.get('/auth/google/callback', google_auth_callback)

module.exports = {google_callback_route}