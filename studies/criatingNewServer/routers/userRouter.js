//require express
const express = require('express');

//Import functions from controller
const {
    createUser,
    getAllUsers
} = require("../controller/userControllers.js")

//Call router function from express
const router = express.Router();

//whrite the routers
router.post('', createUser)
router.post('', getAllUsers)