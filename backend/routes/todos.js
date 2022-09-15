const express = require('express')

const router = express.Router()

// Get all todos
router.get('/', (req, res) => {
    res.status(200).json({message : "Hi mom"})
})

// Get a single todo
router.get('/:id', (req, res) => {
    res.status(200).json({message : "Hi mommy"})
})

// Add a new todo
router.post('/', (req, res) => {
    res.status(200).json({message : "Well done mom"})
})

// Update a todo
router.patch('/:id', (req, res) => {
    res.status(200).json({message : "Nice shot mom"})
})

// Delete a todo
router.delete('/:id', (req, res) => {
    res.status(200).json({message : "Bye mom"})
})

module.exports = router