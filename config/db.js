const mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'product_management'
});

connection.connect();
module.exports.localConnect = connection;










