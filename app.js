const express = require('express')
const validateBody = require('./middleware/validate.mw')
const {
  createTask,
  getAllTasks,
  updateTask,
  deleteTask,
  getTask
} = require('./controller/task.controller')

const app = express() // Создание сервера express

const bodyParser = express.json() // function

/* ROUTING: METHOD, PATH */
app.get('/tasks', getAllTasks)
app.get('/task/:id', getTask)
app.post('/task', bodyParser, validateBody, createTask)
app.patch('/task/:id', bodyParser, validateBody, updateTask)
app.delete('/task/:id', deleteTask)

// Запустили сервер
app.listen(3000, () => {
  console.log('Server started')
})