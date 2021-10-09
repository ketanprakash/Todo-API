//importing express
const express = require('express');

//importing todo router
const todo = require('./api/routes/todoRoutes')

//importing db connection
require('./config/db')
//create express app
const app = express();

//define port
const port = process.env.PORT || 3000;

//use express.json() to parse json data
app.use(express.json());

//use todo router for /todos route
app.use('/todos', todo);

//Add Endpoint for default
app.get('*', (req, res) => {
  res.send("Hello World!");
});

//start listening for requests
app.listen(port, () => {
  console.log(`server running on port: ${port}`);
})