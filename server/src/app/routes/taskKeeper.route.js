const taskRoute = require('../controllers/taskKeeper.controller')
const express = require('express')
const route = express.Router()


route.get('/', taskRoute.getTask)
route.post('/create', taskRoute.postTask)
route.delete('/:id', taskRoute.deleteTask)
route.patch('/:id', taskRoute.updatesTask)

module.exports = route