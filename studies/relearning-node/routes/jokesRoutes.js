const express = require('express');
const router = express.Router();

const { getRandomJoke, getJokeById } = require('../controllers/jokesControllers');

router.get('/random', getRandomJoke);

router.get('/:id', getJokeById);

module.exports = router;
