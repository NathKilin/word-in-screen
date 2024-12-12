const express = require('express');
const router = express.Router()

const{getRandomUser} = require("../controllers/usersControllers.js")
router.get("/random", getRandomUser);

module.exports = router