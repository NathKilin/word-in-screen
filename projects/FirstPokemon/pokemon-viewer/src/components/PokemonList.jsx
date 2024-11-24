// src/components/PokemonList.js
import React from "react";

const PokemonList = ({ pokemons = [] }) => {
    // Garantimos que 'pokemons' seja um array vazio se não for fornecido
    return (
        <div className="pokemon-grid">
            {/* Iteramos sobre os Pokémon fornecidos para criar os cards */}
            {pokemons.map((pokemon, index) => (
                <div className="pokemon-card" key={index}>
                    {/* Imagem do Pokémon usando o ID ou fallback para índice */}
                    <img
                        className="pokemon-image"
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                            pokemon.id || index + 1
                        }.png`}
                        alt={pokemon.name}
                    />
                    {/* Nome do Pokémon */}
                    <h3 className="pokemon-name">{pokemon.name}</h3>
                </div>
            ))}
        </div>
    );
};

export default PokemonList;
