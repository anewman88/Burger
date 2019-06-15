# Burger
HW Assignment 12 - Node Express Handlebars

## Overview Description
Homework Assignment 12 - Node Express Handlebars
SMU Programming Bootcamp Spring 2019

### Overview

The purpose of this assignment is to create a burger logging app with MySQL, Node, Express, Handlebars and a homemade ORM incorporating the MVC design pattern. Node and MySQL query and route data, and Handlebars generates the HTML.  The methods created to retrieve and store data in a database are:

     * `selectAll()`
     * `insertOne()`
     * `updateOne()`
     * `deleteOne()` **Bonus

* The burger logging app, Burger-Roma, is a restaurant app that lets users input or order the names of burgers they'd like to eat.

* Whenever a user submits a burger's name, the app displays the burger name on the left side of the page -- waiting to be devoured.

* Each burger in the Ordered Burger List also has a `Devour it!` button. When the user clicks it, the burger will move to the right side of the page into the Devoured Burger List.

* The app stores every burger in a database, whether devoured or not.

* As a bonus, each burger in the Devoured Burger List has a `Delete it!` button. When the user clicks it, the burger will remove from the list.

My working app can be found on Heroku [here](https://shrouded-beyond-64964.herokuapp.com/)

### Node Packages Used
The following packages are needed (npm install 'pkg name') to run the app

   * [Express](https://www.npmjs.com/package/express)

   * [Express-handlebars] (https://www.npmjs.com/package/express-handlebars)

   * [MySQL](https://www.npmjs.com/package/mysql)

   * [Dotenv](https://www.npmjs.com/package/dotenv)

### App File Structure

The overall file structure for the app is as follows:
```
.
├── config
│   ├── connection.js
│   └── orm.js
│ 
├── controllers
│   └── burgers_controller.js
│
├── db
│   ├── schema.sql
│   └── seeds.sql
│
├── models
│   └── burger.js
│ 
├── node_modules
│ 
├── package.json
│
├── public
│   └── assets
│       ├── css
│       │   └── burger_style.css
│       └── img
│           └── burger.png
│   
├── server.js
│
└── views
    ├── index.handlebars
    └── layouts
        └── main.handlebars
```

## Instructions for Starting the App 

There are two ways to start/run the app.

### Running the app on your computer from a Bash Window

* Using a Bash command line window, clone or download the repo to the desired directory on your computer.

* Execute "npm install" in the cloned project directory to install the needed program packages.

* Create a .env file and insert the following lines and your password where indicated.
```
# MySQL Info
MySQL_PW="MyPasswordGoesHere"
```
* Start the server software by executing the command "node server.js" (This assumes that you have node installed on your computer).

* Open an internet window and goto url "http://localhost:3000/".

### Running the app on your computer from Heroku

* The working app can be found on Heroku [here](https://shrouded-beyond-64964.herokuapp.com/)

## Instructions for Using the App

Welcome to the Burger-Roma App.  

* Enter a burger name in the indicated box and click the `Submit` button.  The burger will appear in the Ordered Burgers list.

* Devour a burger by clicking it's `Devour It!` button.  The burger will be moved to the Devoured Burgers list.

* Delete a burger by clicking it's `Delete It!` button.



