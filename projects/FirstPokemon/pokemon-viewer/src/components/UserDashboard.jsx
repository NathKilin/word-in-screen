// src/components/UserDashboard.js
import React from "react";
import PokemonList from "./PokemonList"; // Importamos o componente para reutilização

const UserDashboard = ({ loggedInUser, logout }) => {
    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>Welcome, {loggedInUser.name}!</h1>
            <p>Your Pokémon Collection:</p>
            <PokemonList pokemons={loggedInUser.collection} />
            <button onClick={logout} className="button-danger" style={{ marginTop: "20px" }}>
                Logout
            </button>
        </div>
    );
};

export default UserDashboard;
