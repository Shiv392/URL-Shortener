const express = require('express');
const URL_Route = express.Router();

const {geturl_list} = require('../../controller/dashboard/geturllist.js');
const {addurls} = require('../../controller/dashboard/addurl.js');

URL_Route.get('/urls',geturl_list);
URL_Route.post('/urls',addurls);

module.exports={URL_Route};