require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const user = require('./routes/user')

const app = express()

// middleware
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})
app.use('/user', user)

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log('Connected to MONGO, Server running on port ', process.env.PORT)
        })
    })
    .catch(err => console.log(err))

