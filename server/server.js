require('dotenv').config()

const bodyParser = require('body-parser')
const express = require('express')
const mongoose = require('mongoose')
const user = require('./routes/user')
const posting = require('./routes/posting')

const app = express()

// middleware
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.get("/", (req, res) => {
    res.send("API TETIFESS");
  });
app.use('/user', user)
app.use('/posting', posting)

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log('Server running on port ', process.env.PORT,'\nConnected to MongoDB...'
            )
        })
    })
    .catch(err => console.log(err))

