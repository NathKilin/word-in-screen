// Funções para chamadas à API

// Obter detalhes de um Pokémon
export function getPokemon({ url }) {
    return fetch(url).then((res) => res.json());
  }
  
  // Obter lista de Pokémon
  export function getAllPokemon(url) {
    return fetch(url).then((res) => res.json());
  }
  