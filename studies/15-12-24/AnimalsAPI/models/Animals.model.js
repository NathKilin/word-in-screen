const mongoose = require("mongoose");

const animalSchema = new mongoose.Schema({
  species: {
    type: String,
    required: [true, "Setup is required!"],
    minlength: 3,
  },
  abilities: {
    type: String,
    required: [false],
  },
  size: {
    type: Number,
    default: 'unknown', 
  },
  alignment: {
    type: String,
    default: 'neutral',
  },
});

module.exports = mongoose.model('Animal', animalSchema);