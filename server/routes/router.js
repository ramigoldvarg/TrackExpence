const routes = require('express').Router();
const expences = require('./expences/expences.js');

routes.use('/expences', expences);

module.exports = routes;