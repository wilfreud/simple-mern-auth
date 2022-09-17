// const mongoose = require('mongoose')
const Todo = require('../models/todos')
const mongoose = require('mongoose')


// get all todos
const getTodos = (req, res) => {
    
    Todo.find().sort({createdAt: -1})
        .then((todos) => {
            if(!todos){
                res.status(404).json({error: 'Nothing found'})
                return
            }
            res.status(200).json({data : todos})
        })
        .catch((err) => {
            res.status(400).json({error: "Error grabbing todos from database"})
        })
}

// get one todo
const getOneTodo = (req, res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)) {
        res.status(400).json({error : "ID must be specified"})
    }
    
    Todo.findById(id)
        .then((todo) => {
            if(!todo){
                res.status(404).json({error: 'Todo not found'})
                return
            }
            res.status(200).json({data : todo})
        })
        .catch((err) => {
            res.status(404).json({error: "Todo not found"})
        })
}

// add todo
const createToDo = (req ,res) => {
    const {title, description=""} = req.body
    if(!title){
        res.status(400).json({error : "Title is required"})
        return
    }

    Todo.create({title, description})
        .then((obj) => {
            res.status(200).json({message : "Todo created", todo : obj})
        })
        .catch((err) => {
            console.log(err.message)
            res.status(400).json({error : "Error creating Todo..."})
        })
}

// update todo
const updateTodo = (req, res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        // console.log("Fixing headers -")
        res.status(400).json({error : "Missing ID"})
        return
    }
    // const {title, description, done=false } = req.body

    Todo.findByIdAndUpdate(id, {...req.body})
        .then((r) => {
            if(!r){
                res.status(404).json({error: "Todo not found"})
                return
            }

            res.status(200).json({message : "Todo updated"})
        })
        .catch((err) => {
            res.status(404).json({error: "Todo not found"})
        })
}

// delete todo
const deleteTodo = (req, res) => {
    const id = req.params.id
    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(400).json({error : "ID is not given"})
        return
    }

    Todo.findByIdAndDelete(id)
        .then(() => {
            res.status(200).json({message : "Todo deleted"})
        })
        .catch((err) => {
            console.log(err.message)
            res.status(404).json({error: "Todo not found"})
        })
}


// Export all 

module.exports = {
    getTodos,
    getOneTodo,
    createToDo,
    updateTodo,
    deleteTodo
}