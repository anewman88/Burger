// ORM functions definitions that serve as a generic layer between the server and the database
// In this case the ORM hides the MySQL database specific commands. 

// create the connection to the specific database
var DBconnection = require("./connection.js");

// function to insert the corrent amount of ? in the MySQL command
// num - the number of question marks
function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

// function to take the input object of columns and values and create a MySQL string
// obj - object containing sets of col: val
function objToSql(obj) {
  var arr = [];

  for (var key in obj) {
    arr.push(key + "=" + obj[key]);
  }

  return arr.toString();
}

/* ORM definitions for each command to perform on the database */
var orm = {
  // Get all entries from the input table in the database
  // tableInput - name of the table
  // cb - callback function
  all: function(tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    DBconnection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  // Create a new entry in the table 
  // table - name of the table
  // cols - array of columns in table 
  // vals - array of values corresponding to each of the columns
  // cb - callback funtion
  create: function(table, cols, vals, cb) {
    var queryString = "INSERT INTO " + table;
    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(vals.length);
    queryString += ") ";

    console.log(queryString);

    DBconnection.query(queryString, vals, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  // Update an existing entry in the database
  // table - name of the table
  // objColVals - list of columns and values to be updated [use {} in call]
  // condition - WHERE condition
  // cd - callback function
  update: function(table, objColVals, condition, cb) {
    var queryString = "UPDATE " + table;
    queryString += " SET ";
    queryString += objToSql(objColVals);
    queryString += " WHERE ";
    queryString += condition;

    console.log(queryString);
    DBconnection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  }
};

module.exports = orm;
