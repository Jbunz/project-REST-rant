const mongoose = require('mongoose')

let commentSchema = new mongoose.Schema({
    author: {type: String, defualt: 'Anonymous' },
    rant: {type: Boolean, default: false },
    stars: { type: Number, require: true },
    content: { type: String, default: ''}
})

module.exports = mongoose.model('Comment', commentSchema)