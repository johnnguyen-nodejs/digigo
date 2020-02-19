const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var BlogSchema = new Schema({
    title: String,
    sub: String,
    content1: String,
    content2: String,
    content3: String,
    avatar: String,
    timestamp: {
        type: Date,
        default: Date.now
    }
});

module.exports = Blog = new mongoose.model('blog', BlogSchema);
