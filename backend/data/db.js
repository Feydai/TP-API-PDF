const mysql = require('mysql');

let connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1364508042Leo@!',
  database: 'pdf_database'
});

connection.connect((err) => {
  if (err) {
    console.error('An error occurred while connecting to the MySQL server:', err);
  } else {
    console.log('Connected to the MySQL server.');
  }
});

module.exports = connection;