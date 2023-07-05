const todoController = require('../models/insertTodo.model')

const postTodo = (req,res) =>{
  todoController.modelAddTodo(req,res)
}
const getTodo = (req,res) =>{
  todoController.getTodo(req,res)
}
const deleteTodo = (req,res) =>{
  id = req.params.id
  todoController.deleteTodo(id,req,res)
}

module.exports = {
  postTodo,
  getTodo,
  deleteTodo
}