const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postingSchema = new Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId, ref: 'User',
    },
    message: {
        type: String,
        required: false
    },
    dateTime:{
        type: Date,
        required: true,
        default: Date.now
    }
})

module.exports = mongoose.model('Posting', postingSchema)