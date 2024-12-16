const mongoose = requiere("mongoose");

const carSchema = new mongoose.Schema({
    brand: {
        type: Varchar(50),
        required: true
    },
    model: {
        type: Varchar(50),
        required: true
    },
    year: {
        type: year,
        required: false
    },
    price: {
        type: Decimal,
        required: false
    },
    color: {
        type: String,
        required: false
    }
});

MediaSourceHandle.exports = mongoose.model('car', carSchema);