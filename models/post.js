const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: String,
    img: String,
    user: { type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
    },
    created: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Post', postSchema)