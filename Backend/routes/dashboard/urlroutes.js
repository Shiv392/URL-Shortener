const express = require('express');
const URL_Route = express.Router();
const {getURLDashboard} = require('../../controller/dashboard/getURLDashboard');

URL_Route.get('/urls',getURLDashboard);

module.exports={URL_Route};