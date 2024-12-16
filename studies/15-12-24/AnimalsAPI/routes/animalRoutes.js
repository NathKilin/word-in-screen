const express = require('express');

const router = express.Router();

const animals = [
{
    species: "Mystical Lion",
    abilities: "Divine Wisdom, Inspirational Roar",
    size: 5,
    alignment: "good",
},
{
    species: "Winged Griffin",
    abilities: "Agile Flight, Sharp Claws",
    size: 4,
    alignment: "neutral",
},
{
    species: "Shadow Wolf",
    abilities: "Supernatural Speed, Devastating Bite",
    size: 4,
    alignment: "evil",
},
{
    species: "Fire Phoenix",
    abilities: "Rebirth in Flames, Fire Explosion",
    size: 3,
    alignment: "good",
},
{
    species: "Cave Troll",
    abilities: "Brute Strength, Regeneration",
    size: 6,
    alignment: "evil",
},
{
    species: "Guardian Centaur",
    abilities: "Archery, Ancient Wisdom",
    size: 5,
    alignment: "good",
},
{
    species: "Green Dragon",
    abilities: "Toxic Fire, Swift Flight",
    size: 7,
    alignment: "neutral",
},
{
    species: "Shadow Harpy",
    abilities: "Silent Flight, Deafening Screech",
    size: 3,
    alignment: "evil",
},
{
    species: "Golden Unicorn",
    abilities: "Healing, Celestial Gallop",
    size: 4,
    alignment: "good",
},
{
    species: "Sea Serpent",
    abilities: "Underwater Constriction, Camouflage",
    size: 6,
    alignment: "neutral",
},
{
    species: "Ice Giant",
    abilities: "Ice Control, Tremendous Strength",
    size: 8,
    alignment: "evil",
},
{
    species: "Wind Fairy",
    abilities: "Wind Control, Temporary Invisibility",
    size: 1,
    alignment: "good",
},
{
    species: "Messenger Satyr",
    abilities: "Speed, War Trumpet",
    size: 3,
    alignment: "good",
},
{
    species: "Furious Minotaur",
    abilities: "Powerful Charge, Resilience",
    size: 5,
    alignment: "evil",
},
{
    species: "Clever Fox",
    abilities: "Camouflage, Strategic Intelligence",
    size: 2,
    alignment: "neutral",
},
{
    species: "Dark Raven",
    abilities: "Swift Flight, Long-Range Vision",
    size: 2,
    alignment: "evil",
},
{
    species: "Majestic Hippogriff",
    abilities: "Flight, Powerful Leap",
    size: 4,
    alignment: "good",
},
{
    species: "Basilisk",
    abilities: "Lethal Gaze, Speed",
    size: 5,
    alignment: "evil",
},
{
    species: "Giant Polar Bear",
    abilities: "Immense Strength, Ice Camouflage",
    size: 6,
    alignment: "neutral",
},
{
    species: "Lava Dragon",
    abilities: "Lava Breath, Extreme Resilience",
    size: 7,
    alignment: "evil",
},
{
    species: "Golden Eagle",
    abilities: "Soaring High, Sharp Vision",
    size: 4,
    alignment: "good",
},
{
    species: "Stone Golem",
    abilities: "Unyielding Strength, High Defense",
    size: 7,
    alignment: "neutral",
},
{
    species: "Giant Spider",
    abilities: "Deadly Venom, Web Spinning",
    size: 4,
    alignment: "evil",
},
{
    species: "Blue Dragon",
    abilities: "Ice Breath, Slow Flight",
    size: 7,
    alignment: "neutral",
},
{
    species: "Colossal Crab",
    abilities: "Destructive Claws, Natural Armor",
    size: 6,
    alignment: "neutral",
},
{
    species: "Enchanted Stag",
    abilities: "Speed, Partial Invisibility",
    size: 4,
    alignment: "good",
},
{
    species: "Shadow Stag",
    abilities: "Speed, Menacing Aura",
    size: 4,
    alignment: "evil",
},
{
    species: "Wild Boar",
    abilities: "Quick Charge, Sharp Tusks",
    size: 3,
    alignment: "neutral",
},
{
    species: "Wise Monkey",
    abilities: "Strategy, Animal Communication",
    size: 2,
    alignment: "good",
},
{
    species: "Forest Specter",
    abilities: "Intangibility, Haunting Presence",
    size: 3,
    alignment: "evil",
},
];


router.get('/', (req, res) => {
    res.json(animals);
});

router.get('/:id', (req, res) => {
    const animal = animals.find(j => j.id === parseInt(req.params.id));
    if (!animal) return res.status(404).send('animal does not exists in Narnia reign');
    res.json(animal);
});

router.post('/', (req, res) => {
    const newAnimal = {
        id: animals.length + 1,
        animal: req.body.animal
    };
    animals.push(newAnimal);
    res.status(201).json(newAnimal);
});

router.put('/:id', (req, res) => {
    const animal = animals.find(j => j.id === parseInt(req.params.id));
    if (!animal) return res.status(404).send('animal not found');

    animal.animal = req.body.animal;
    res.json(animal);
});

router.delete('/:id', (req, res) => {
    const animalIndex = animals.findIndex(j => j.id === parseInt(req.params.id));
    if (animalIndex === -1) return res.status(404).send('animal not found');

    animals.splice(animalIndex, 1);
    res.status(204).send();
});

module.exports = router;