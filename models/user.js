const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const userSchema = new Schema({
    googleId: {type: String, required: true},
    displayName: {type: String, required: true},
    firstName: String,
    lastName: String,
    image: String,
    created: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('User', userSchema)