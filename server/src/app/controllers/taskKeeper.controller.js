const taskController = require('../models/taskKeeper.models')

const postTask = (req, res) => {
  taskController.addTasks(req, res)
}
const getTask = (req, res) => {
  taskController.getTasks(req, res)
}
const deleteTask = (req, res) => {
  const id = req.params.id
  taskController.deleteTask(id, res)
}
const updatesTask = (req, res) => {
  const id = req.params.id
  taskController.updateTask(id,req, res)
}

module.exports = {
  postTask,
  getTask,
  deleteTask,
  updatesTask
}