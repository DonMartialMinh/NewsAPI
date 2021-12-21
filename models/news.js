const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PostSchema = new Schema ({
    url: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    imageurl: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    newname: {
        type: String,
        required: true,
    },
    time: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('news', PostSchema);