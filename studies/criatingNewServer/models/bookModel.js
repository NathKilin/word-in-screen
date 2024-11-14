const mongoose = require("mongoose")

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    authorLname: {
        type: String,
        require: true
    },
    authorFname: {
        type: String,
        require: true
    },
    category: {
        type: String,
        require: true
    }
});

module.exports = mongoose.model("book", bookSchema);