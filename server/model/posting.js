const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postingSchema = new Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User',
        required: true
    },
    text: {
        type: String,
        required: true
    },
    timestamp:{
        type: Date,
        required: true,
        default: Date.now
    },
    likes_count: {
        type: Number,
        required: false
    }
})

module.exports = mongoose.model('Posting', postingSchema)