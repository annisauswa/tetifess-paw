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
        required: false,
    },
    role:{
        type: String,
        required: true,
        default: 'user'
    },
    likedPostings: {
        type: Array,
        required: false
    },
    dateCreated: {
        type: Date,
        required: true
    },
    dateEdited: {
        type: Date,
        required: false
    }
})


module.exports = mongoose.model('User', userSchema)
