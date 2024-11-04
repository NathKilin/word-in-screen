// importing mongoose

const mongoose = require ('mongoose');

// defining uri 
const mongoURI = 'mongodb://localhost:27017/library';

// conecting to mongoDB
mongoose.connect(mongoURI, {
    // instruction to use the new parsing system 
    // (the way of interpretate Url)
    useNewUrlParser: true,
    // configurating the mechanism of conection
    useUnifiedTopology: true,
})
.then(()=>{
    console.log('Conection with MongoDB established with success :)');
})
.catch((error) => {
    console.error('Error to conect with MongoDB: ', error);    
});

module.exports = mongoose