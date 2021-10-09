//import the model from model file
const Todo = require('../models/todoModel');

//create controller functions
const listTodos = (req, res) => {
  Todo.find({}, (err, todoArray) => {
    if (err){
      res.status(500).send("Database Error");
    }
    res.status(200).json(todoArray);
  })
};

const createTodo = (req, res) => {
  const newTodo = new Todo(req.body);
  newTodo.save((err, todo) => {
    if (err){
      res.status(500).send("Database Error");
      console.log(err);
    }
    res.status(201).json(todo);
  })
};

const getTodo = (req, res) => {
  Todo.find({_id: req.params.id}, (err, todo) => {
    if (err){
      res.status(500).send("Database Error");
    }
    res.status(200).json(todo);
  })
};

const updateTodo = (req, res) => {
  Todo.findOneAndUpdate({_id: req.params.id}, req.body, {new : true}, (err, todo) => {
    if (err){
      res.status(500).send("Database Error");
    }
    res.status(201).json(todo);
  })
};

const deleteTodo = (req, res) => {
  Todo.deleteOne({_id: req.params.id}, (err) => {
    if (err){
      res.status(500).send("Database Error");
    }
    res.status(201).json({message: "Successfully Deleted Todo"});
  })
};

module.exports = {listTodos, updateTodo, deleteTodo, createTodo, getTodo};