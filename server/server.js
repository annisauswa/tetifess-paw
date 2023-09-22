require('dotenv').config()

const bodyParser = require('body-parser')
const express = require('express')
const mongoose = require('mongoose')
const user = require('./routes/user')

const app = express()

// middleware
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/user', user)

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log('Connected to MONGODB Server running on port ', process.env.PORT)
        })
    })
    .catch(err => console.log(err))

