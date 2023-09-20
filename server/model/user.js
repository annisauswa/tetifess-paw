const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    username: {String, required: true, unique: true},
    password: {String, required: true},
    name: String,
    bio: String
})

module.exports = mongoose.model('User', userSchema)
