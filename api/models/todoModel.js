//importing mongoose
const mongoose = require('mongoose');

//create schema for Todo

const TodoSchema = mongoose.Schema({
  text : {
    type: String,
    required: true
  },
  status: {
    type: Boolean,
    required: true
  },
  createdOn: {
    type: Date,
    default: Date.now
  }
});

//create and export model
module.exports = mongoose.model("todoModel", TodoSchema);