const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    fName: {
        type: String,
        require: true
    },
    lName: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    favoriteBooks: {
        type: Array,
        require: false
    }
});

module.exports = mongoose.model("user", userSchema);