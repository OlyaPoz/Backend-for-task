const { Task } = require('../models')

module.exports.createTask = async (req, res, next) => {
  try {
    const { body } = req

    const newTask = await new Task(body)

    res.status(201).send(newTask)
  } catch (error) {
    res.status(400).send(error.message)
  }
}

module.exports.getTask = async (req, res, next) => {
  try {
    const { params } = req
    const task = await Task.findOne(params.id)
    if (task) {
      return res.send(task)
    }
    throw new Error('Task not found')
  } catch (error) {
    res.status(404).send(error.message) // NOT CORRECT
  }
}

module.exports.getAllTasks = async (req, res, next) => {
  try {
    const tasks = await Task.findAll()
    res.status(200).send(tasks)
  } catch (error) {
    res.status(400).send(error.message)
  }
}

module.exports.updateTask = async (req, res, next) => {
  try {
    const { params, body } = req

    const foundTask = await Task.findOne(params.id)
    const updatedTask = await foundTask.update(body)
    const responseTask = JSON.stringify(updatedTask)

    res.status(202).end(responseTask)
  } catch (error) {
    res.status(400).send(error.message)
  }
}
module.exports.deleteTask = async (req, res, next) => {
  try {
    const { params } = req

    const foundTask = await Task.findOne(params.id)
    const verdict = await foundTask.delete()

    res.status(200).send({ verdict })
  } catch (error) {
    res.status(400).send(error.message)
  }
}
