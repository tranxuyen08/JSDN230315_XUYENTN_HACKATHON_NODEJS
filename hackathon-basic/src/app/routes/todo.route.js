const todoController = require('../controllers/todo.controller')
const express = require('express')
const route = express.Router()

route.post('/create', todoController.postTodo)

route.get('/', todoController.getTodo)

route.delete('/:id', todoController.deleteTodo)

module.exports = route
