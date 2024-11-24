// Lista inicial de Pokémons
export const pokemons = [
    {
        name: "pikachu",
        type: ["electric"],
        stats: { hp: 35, attack: 55, defense: 40 },
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
    },
    {
        name: "bulbasaur",
        type: ["grass", "poison"],
        stats: { hp: 45, attack: 49, defense: 49 },
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    },
    {
        name: "charmander",
        type: ["fire"],
        stats: { hp: 39, attack: 52, defense: 43 },
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
    },
];

// Lista inicial de usuários
export const users = [
    {
        id: 1,
        name: "Ash Ketchum",
        collection: ["pikachu", "bulbasaur"],
    },
    {
        id: 2,
        name: "Misty",
        collection: ["starmie", "psyduck"],
    },
];
