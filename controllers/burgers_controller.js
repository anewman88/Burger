var express = require("express");

var router = express.Router();
var burger = require("../models/burger.js");

// redirect to the /burgers route --> index.html
router.get("/", function(req, res) {
  res.redirect("/burgers");
});

// get route - Display the list of burgers in the database
router.get("/burgers", function(req, res) {

  // First get the list of burgers from the datbase 
  // then pass the burgerData to render index.html
  burger.all(function(burgerData) {
    // wrapper for orm.js that using MySQL query callback will return burger_data, render to index with handlebar
    res.render("index", { burger_data: burgerData });
  });
});

// post route - Accept input burger info then send back to index to display
router.post("/burgers/create", function(req, res) {
  // takes the request object using it as input for burger.addBurger
  burger.create(req.body.burger_name, function(result) {
    // wrapper for orm.js that using MySQL insert callback will return a log to console,
    // render back to index with handle
    console.log(result);
    res.redirect("/");
  });
});

// put route - update the specified [:id] burger then send back to index to display
router.put("/burgers/:id", function(req, res) {
  burger.update(req.params.id, function(result) {
    // wrapper for orm.js that using MySQL update callback will return a log to console,
    // render back to index with handle
    console.log(result);
    // Send back response and let page reload from .then in Ajax
    res.sendStatus(200);
  });
});

module.exports = router;
