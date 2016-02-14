var mysql = require('mysql');

var connection = mysql.createConnection({
  port: 3306,
  host: 'localhost',
  password: '',
  user: 'root',
  database: 'burgers_db'
});

module.exports = connection;




