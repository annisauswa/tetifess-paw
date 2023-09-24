const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true,
    },
    bio: {
        type: String,
        required: false
    },
    date_created: {
        type: Date,
        required: true
    },
    date_edited: {
        type: Date,
        required: false
    }
})


module.exports = mongoose.model('User', userSchema)
