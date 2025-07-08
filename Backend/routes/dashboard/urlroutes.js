const express = require('express');
const URL_Route = express.Router();
const {getURLDashboard} = require('../../controller/dashboard/getURLDashboard');
const {geturl_list} = require('../../controller/dashboard/geturllist.js');

URL_Route.get('/urls',geturl_list);

module.exports={URL_Route};