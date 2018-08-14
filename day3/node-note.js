

// NPM //
/*
NPM = Node Package Manager
• install code package managers shared by others.
• a tool used from the command line.
• automatically installs dependencies of packages we install.
*/




// NPM install //
/*
• use (--save) to save the package.
• if you see error = like: EACCES: use (sudo infront of everythings)
• example: sudo npm install react
• example: sudo npm install express body-parser // install mutiple things in one line by spaces//
*/




// Node_modules //
/*
• don't commit node modlues.
• use .gitignore and add node_modlues inside, and do it before add all to push to github.
*/




// Node //
/*
• an application that runs on our computer, and uses the same runtime as Chrome to run Javascript.
*/




// Nodemon //
/*
• nodemon: a development tool that runs in the terminal to watch for changes in the code and run the script again.
• npm install -g nodemon.
• ctrl + C to stop Nodemon process // any process you want to stop //
*/




// Modules and Node //
/*
var importedFile = require('./script.js');
• require: allows us to import code from other files.

module.exports={  
  num:12,
  func:function(){
    return;
  }
}
• module.exports: node allows us to easily export a single piece of code(object, function, etc.)

* example *
• script.js •
var calc = require(calc);                            

var three = calc.add(1,2);

• calc.js •
var calc = {
  add:function(num1, num2){
    return num1 + num2;
  }
};
module.exports = calc;
*/




// Endpoints //
/*
• app.get('/api/players', function((reg, res, next){})

• response: http://soda.org

• request:
- GET:    http://soda.org/api/brands              // request to get a data //
- POST:   http://soda.org/api/brands              // add data to brand //
- PUT:    http://soda.org/api/brands/brand        // edite data give specific brand //
- DELETE: http://soda.org/api/brands/brand        // delete thing at given brand //

• CRUD: create, read, update, delete
• REST: post, get, put, delete
• Express Method: .get()  .post()  .put()  .delete()

* example *
• app.get('/api/players', function(req, res, next){
    ** code to send back all players **
})

• app.post('/api/players', function(req, res, next){
    ** code to add a players **
})


* Recap *
••••• app.get('/api/players', function(req, res, next){ •••••

• (app.get): each REST verb has a corresponding express method to listen for requests of thse types.

• ('/api/players'): the first parameter is the URL to which the client will send a request.

•(function): the other parameters are callback function with instructions to the server what to do
when it receives a request of this type at the URL.

• (req): express passes in all info from the client's request.

• (res): express pressed in object with method related to responding.

• (next): express presses in the next function to be run.
*/





// Simple Server //
/*
• var express = require('express');
- ('express'): require the express modlue

• var app = express();
- invoke express to create an app which we can ask to listen.

• app.listen(3000, function(){       
  console.log("I'm listen!");
}
- (3000): the first parameter is the port where the server will listen.
- (function(){}): the second parameter is a callback function which will run as soon as the server listening.
- (app.listen()): tells the server to listen for requests on a port not stop runing untill we said so. 
*/





// Top-Level Middleware //
/*
•• app.use: an express method which runs the passed in function on every request that comes to your server.

• app.use(function(req, res, next){
  next();
})
app.get('/api/users', function(req, res, next){
  res.send(users);
})

* Recap *
• var bodyParser = require('body-parser');

•  app.use(bodyParser.json())
- bodyParser.json(); will parse the body of the request and make it easily accessible as (req.body) to the next functions.

• app.post('/api/todos', function(req, res, next){
  req.body
})
- (req.body): the parsed copy of the request body - contains the data sent by the client. 
*/





// URL Parameters //
/*
* example client side *
• http://cities.org/api/cities/chicago

• app.get('/api/cities/:city', function(req, res, next){
    req.params.city        
})
- (city): match the name of the city that put in the URL in this case is (Chicago).


* example server side *
• http://cities.org

• var cities = [{name: "Chicago", country: "USA"}, {name: "London", country: "UK"}, {name: "Sydney", country: "Australia"}];

• app.get('/api/cities', function(req, res, next){
    res.status(200).send(cities);
});

app.get('/api/cities/:city', function(){
  for(var i = 0; i < cities.length; i++){
    if(cities[i].name === req.params.city){
      res.status(200).send(cities[i]);
    }
  }
});

* Recap *
• app.get('/api/posts/:postId', function(req, res, next){
  req.params.postId
})
- (/:postId): indicate URL parameters with a colon. The client can send any value in this place.
- (req.params.postId): express create a params object on the req object with corresponding values for each URL parameter.
)
*/