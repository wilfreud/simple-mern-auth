const express = require('express')
const {getTodos, getOneTodo, createToDo, updateTodo, deleteTodo} = require('../controllers/todos')

const router = express.Router()

// Get all todos
router.get('/', getTodos)

// Get a single todo
router.get('/:id', getOneTodo)

// Add a new todo
router.post('/', createToDo)

// Update a todo
router.patch('/:id', updateTodo)

// Delete a todo
router.delete('/:id', deleteTodo)


// Exports routes in router
module.exports = router