require('dotenv').config()

const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const express = require('express')
const mongoose = require('mongoose')
const user = require('./routes/user')
const posting = require('./routes/posting')
const admin = require('./routes/admin')
const { verifyToken, verifyAdmin } = require('./middleware/auth')

const app = express()

// middleware
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())

app.get("/", (req, res) => {
    res.send("API TETIFESS");
  });
app.use('/user', user)
app.use('/posting', verifyToken, posting)
app.use('/admin', verifyToken, verifyAdmin, admin)

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log('Server running on port ', process.env.PORT,'\nConnected to MongoDB...'
            )
        })
    })
    .catch(err => console.log(err))

