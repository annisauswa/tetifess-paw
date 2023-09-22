const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true,
    },
    bio: {
        type: String,
        required: true
    }
}, {timestamps: true})

module.exports = mongoose.model('User', userSchema)
