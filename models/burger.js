var orm = require("../config/orm.js");

/* define a burger object that contains a series of commands       */
/* [via function calls] to perform on the table in the database.   */
/* These correspond 1-to-1 with the ORM definitions in orm.js      */ 
var burger = {

  /* Get all burger entries */
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },

  /* Create a burger entry */
  create: function(name, cb) {
    orm.create("burgers", 
        ["burger_name", "devoured"], 
        [name, false], 
        cb);
  },
  
  /* Update a burger entry */
  update: function(id, cb) {
    var condition = "id=" + id;
    orm.update("burgers", 
        {devoured: true}, 
        condition, 
        cb);
  }
};

module.exports = burger;
