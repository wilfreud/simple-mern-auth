require('dotenv').config()
const express = require('express')
const todosRoutes = require('./routes/todos')
const mongoose = require('mongoose')

// Server setup
const app = express()
const PORT = process.env.PORT || 4000



// Connect to database Then for requests
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(PORT, () => { 
            console.log('Connected to DB & listening on port ', PORT)
        })
    })
    .catch((err) => console.error(err.message))


// use json for parsing
app.use(express.json())

// main Middleware
app.use((req, res, next) => {
    console.log("Incoming request:")
    console.log("PATH:", req.path, "METHOD:",req.method)
    next()
})

/* ROUTES */

// using todos routes
app.use('/api/todos', todosRoutes)