const express = require('express');
const URL_Route = express.Router();
const {getURLDashboard} = require('../../controller/dashboard/getURLDashboard');

URL_Route.get('/',getURLDashboard);

module.exports={URL_Route};