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
    },
    publishedDate: {
        type: Date,
        required: true
    },
    avarageRating: {
        type: Number,
        min: 1,
        max: 5
    }
});

const Book = mongoose.model('Book', bookSchema);
module.exports = Book;