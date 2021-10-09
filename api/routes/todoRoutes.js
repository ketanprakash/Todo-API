const todoController = require("../controllers/todoController")
const router = require('express').Router();
//routes

// /todos
// GET : get all todos
router.get('/', todoController.listTodos);
// POST : add a todo
router.post('/', todoController.createTodo);

// /todos:id
router.get('/:id', todoController.getTodo);
// PUT : Edit a todo by id 
router.put('/:id', todoController.updateTodo);
// DELETE : delete a todo by id
router.delete('/:id', todoController.deleteTodo);

module.exports = router;
