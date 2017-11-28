var dbConn = require('./dbConn.js');

var expenceDAL = new dbConn("expences");

module.exports = expenceDAL;