import React from "react";
import { useLocation } from "react-router-dom";
import "./Details.css";

const Details = () => {
  const location = useLocation();
  const { pokemon } = location.state || {};

  if (!pokemon) {
    return <p>No Pokémon selected.</p>;
  }

  return (
    <div className="details-container">
      <h2>{pokemon.name.toUpperCase()}</h2>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <p>
        <strong>Type:</strong>{" "}
        {pokemon.types.map((type) => type.type.name).join(", ")}
      </p>
      <p>
        <strong>Weight:</strong> {pokemon.weight}
      </p>
      <p>
        <strong>Height:</strong> {pokemon.height}
      </p>
      <p>
        <strong>Abilities:</strong>{" "}
        {pokemon.abilities.map((ability) => ability.ability.name).join(", ")}
      </p>
    </div>
  );
};

export default Details;
