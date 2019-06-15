$(document).ready(function() {
    
    var DebugOn = false;

    // Event Handler for the devour button  
    $(".devour-form").on("submit", function(event) {
      event.preventDefault();
  
      var burger_id = $(this).children(".burger_id").val();
      if (DebugOn) console.log("In script.js devour-form: " + burger_id);
      $.ajax({
        method: "PUT",
        url: "/burgers/" + burger_id
      }).then(function(data) {
        // reload page to display devoured burger in proper column
        location.reload();
      }); 
    });

    // Event handler for the delete button
    $(".delete-form").on("submit", function(event) {
      event.preventDefault();
  
      var burger_id = $(this).children(".burger_id").val();
      if (DebugOn) console.log("In script.js delete-form: " + burger_id);
      $.ajax({
        method: "DELETE",
        url: "/burgers/" + burger_id
      }).then(function() {
        // reload page to display devoured burger in proper column
        location.reload();
      });  
    });
  });
  