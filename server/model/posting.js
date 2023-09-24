const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postingSchema = new Schema({
    post_id:{
        type: mongoose.Schema.Types.ObjectId, ref: 'Post',
    },
    username: {
        type: String,
        required: false
    },
    text: {
        type: String,
        required: false
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