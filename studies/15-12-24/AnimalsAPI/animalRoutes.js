const express = require('express');
const router = express.Router();

const animals = [
    { id: 1, name: 'Lion' },
    { id: 2, name: 'Tiger' },
    { id: 3, name: 'Elephant' },
    { id: 4, name: 'Giraffe' },
    { id: 5, name: 'Zebra' }
];

// Test route
router.get('/test', (req, res) => {
    res.send("we're testing");
});

// Home route
router.get('/', (req, res) => {
    res.send("Animals API Home");
});

// Random animal route
router.get('/random', (req, res) => {
    const randomAnimal = animals[Math.floor(Math.random() * animals.length)];
    res.send(randomAnimal);
});

// Get animal by ID
router.get('/:id', (req, res) => {
    const { id } = req.params;
    const animal = animals.find(animal => animal.id == id);
    if (animal) {
        res.send(animal);
    } else {
        res.status(404).send(`Animal with id: ${id} does not exist`);
    }
});

module.exports = router;
