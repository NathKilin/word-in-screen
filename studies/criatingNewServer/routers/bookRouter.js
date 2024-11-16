//require express
const express = require('express')

//Import functions from controller
const {
    createBook,
    getAllBooks
} = require("../controller/bookController.js")

//Call router function from express
const router = express.Router();

//whrite the routers
router.post('', createBook)
router.post('', getAllBooks)