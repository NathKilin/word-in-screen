// importing mongoose

const mongoose = require ('mongoose');

// defining uri 
const mongoURI = 'mongodb://localhost:27017//library';

// conecting to mongoDB
mongoose.connect(mongoURI, {
    userNewUrlParser: true,
    useUnifiedTopology: true,
})