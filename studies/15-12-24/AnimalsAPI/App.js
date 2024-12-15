const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config()
const app = express();
const PORT = 3000;
const animalsRoutes = require('./animalRoutes.js');

app.use(express.json());

mongoose.connect

app.get('/', (req, res) => {
    res.send("Hello, there!");
});

app.use('/animals', animalsRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
