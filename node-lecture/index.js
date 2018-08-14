// cannot use import, must use require
const express = require('express');
// express is just a function
// the package express is a framework for node js
// it makes our life a little bit easier
const bodyParser  = require('body-parser');
// save the result of express being invoked to the variable app
const app = express(); 
// ================================ //
// ===== TOP LEVEL MIDDLEWARE ===== //
// ================================ //
// top level meaning it's at the top of your file
// middleware a function that will fire before your endpoint
// any endpoint below your middleware will be affected by that middleware. Any endpoint above, will not be
app.use(bodyParser.json());
// if req.body is ever undefined, check to make sure this bodyParser middleware is being correctly applied
// ===================== //
// ===== ENDPOINTS ===== //
// ===================== //
// ===== SYNTAX ===== //
// app.METHOD(PATH, HANDLER FUNCTION)
// METHOD --->>> get, put, post, delete. The http request method. make sure the method describes the purpose
// PATH --->>> is like the address ending, the path on the server. Common to preface with /api to help recognize that it's an endpoint path for your server
// HANDLER FUNCTION --->>> a function with three parameters: request object, response object, next function. When your server finds the correct endpoint, it will then invoke the handler function. 
// ===== ORDER OF OPERATIONS ===== //
// an http request is made to your server
// your server will then find the endpoints with the matching method 
// it will then find the endpoint with the matching path
// when the correct endpoint is found, it will invoke the handler function
// the handler function will do whatever you told it to do
// ===== REACT HTTP REQUEST EXAMPLE ===== //
// axios.get('http://cool.com/api/stuff').then((res) => {
// the res here is the result from your http request
// })
let stuff = []
app.get('/api/stuff', (req, res) => {
  // must receive a request before you can respond
  // the res here is the response object specific to express node
  
  // 2 things to do when responding
  // 1 - set a status code
  //   200s - all is well
  //   300s - redirections
  //   400s - client errors
  //   500s - server errors
  // 2 - send data, this portion is optional
  res.status(200).send("you were successful!")
})
app.post('/api/stuff', (req, res) => {
  stuff.push(req.body)
  res.status(200).send(stuff);
})
app.get('/api/stuff/:id', (req, res) => {
  // we have indicated in our path that this endpoint needs url params. Now there will be a property on the params object with the name of whatever we put after the colon
  // the value of this property will be whatever you put in the request url
  // IMPORTANT! the colon will ONLY be in the path of the endpoin, it will NOT be in the request url
  console.log(req.params) // req.params is just an object on the req object
})
// first argument is the port number
// second argument is a callback function
app.listen(3000, () => console.log('listening on port 3000'))
// ==== NODEMON ==== //
// it auto detects changes in files and restarts node for you
// make sure the main property in your package.json has the file name (and file path if applicable) to your main server file --- often index.js
// if you need to do a force restart, type rs and press enter
// to exit, ctrl + c