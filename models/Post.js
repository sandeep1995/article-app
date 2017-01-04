var mongoose = require('mongoose');

var PostSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    article: String,
    timestamp: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Post", PostSchema);