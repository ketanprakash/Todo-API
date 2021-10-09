//importing mongoose
const mongoose = require('mongoose');

//setting uri as the connection url for mongodb
const uri = "mongodb+srv://newuser:newuserpassword@todo-api.0gc9s.mongodb.net/Todo-API?retryWrites=true&w=majority"

//setting up options
const options = {
  useNewUrlParser: true, 
  useUnifiedTopology: true
}

//connecting to mongodb database
mongoose.connect(uri, options)
.then(() => {console.log("Connected to Database")}, (err) => {console.log("Could not connect to database \n", err)})
