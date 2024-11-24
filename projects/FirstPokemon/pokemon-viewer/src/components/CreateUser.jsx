// src/components/CreateUser.js
import React, { useState } from "react";
import { lowHpPokemons } from "../data/pokemonData";

const CreateUser = ({ userList, setUserList, setCurrentScreen }) => {
    const [userName, setUserName] = useState("");

    const createUser = () => {
        if (!userName.trim()) {
            alert("Please enter a valid name!");
            return;
        }
        const existingUser = userList.find((user) => user.name === userName.trim());
        if (existingUser) {
            alert("This user already exists!");
            return;
        }

        const randomPokemon = lowHpPokemons[Math.floor(Math.random() * lowHpPokemons.length)];
        const newUser = {
            id: userList.length + 1,
            name: userName.trim(),
            collection: [randomPokemon.name],
        };

        const updatedUsers = [...userList, newUser];
        setUserList(updatedUsers);
        localStorage.setItem("users", JSON.stringify(updatedUsers));
        alert(`User ${userName} created successfully! Pokémon received: ${randomPokemon.name}`);
        setUserName("");
        setCurrentScreen("main");
    };

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>Create a New Account</h1>
            <input
                type="text"
                placeholder="Enter your name"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className="input-field"
            />
            <button onClick={createUser} className="button-primary">
                Create
            </button>
            <button onClick={() => setCurrentScreen("main")} className="button-danger">
                Back
            </button>
        </div>
    );
};

export default CreateUser;
