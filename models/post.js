const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const postSchema = new Schema({
    textArea: {type: String, required: true},
    image: String,
    user: { type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
    },
    timestamp: true
})

module.exports = mongoose.model('Post', postSchema)