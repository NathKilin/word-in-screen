const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        Required: true,
        maxlength: 100
    },
    author: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    }
})