// src/data/pokemonData.js
export const pokemons = [
    { name: "bulbasaur", hp: 45, type: ["grass", "poison"] },
    { name: "charmander", hp: 39, type: ["fire"] },
    { name: "squirtle", hp: 44, type: ["water"] },
    { name: "pikachu", hp: 35, type: ["electric"] },
    { name: "jigglypuff", hp: 45, type: ["fairy"] },
    { name: "zubat", hp: 40, type: ["poison", "flying"] },
    { name: "oddish", hp: 45, type: ["grass", "poison"] },
];

export const lowHpPokemons = pokemons.filter((pokemon) => pokemon.hp <= 45);
