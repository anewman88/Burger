require("dotenv").config();  // read and set any environment variables with the dotenv package

var mysql = require("mysql");
var connection;
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: process.env.MySQL_PW,
    database: "burgers_db"
  });
  
};

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("MySQL burgers_db connected as id " + connection.threadId);
});

module.exports = connection;
