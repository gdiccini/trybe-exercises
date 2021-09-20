const mysql = require('mysql2');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'trybeDB',
  password: '12345678',
  database: 'rest_exercicios',
});

module.exports = connection;
