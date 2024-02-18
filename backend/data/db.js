const mysql = require('mysql2');
require('dotenv').config();

const options = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
};

let connection;

function handleDisconnect() {
  connection = mysql.createConnection(options);

  connection.connect(function(err) {
    if(err) {
      console.log('Error when connecting to db:', err);
      setTimeout(handleDisconnect, 2000);
    }                                     
  });                                     

  connection.on('error', function(err) {
    console.log('DB error', err);
    if(err.code === 'PROTOCOL_CONNECTION_LOST') {
      handleDisconnect();                         
    } else {                                      
      throw err;                                  
    }
  });
}

handleDisconnect();

module.exports = connection;