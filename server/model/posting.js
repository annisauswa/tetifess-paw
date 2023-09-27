const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postingSchema = new Schema({
    userId: {
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
    likes:{
        type: Array,
        required: false
    },
    likes_count: {
        type: Number,
        required: false,
        default: 0
    },
    image: {
        type: String,
        required: false
    }
})

module.exports = mongoose.model('Posting', postingSchema)