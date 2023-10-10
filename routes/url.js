const express = require('express');
const {handleGenNewShortUrl}=require('../controller/url')
const routes = express.Router();



routes.get('/',handleGenNewShortUrl);





module.exports = routes;