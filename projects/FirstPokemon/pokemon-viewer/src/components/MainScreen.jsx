// src/components/MainScreen.js
import React from "react";

const MainScreen = ({ setCurrentScreen }) => {
    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>Pokémon Collector App</h1>
            <button
                onClick={() => setCurrentScreen("create")}
                className="button-primary"
            >
                Create User
            </button>
            <button
                onClick={() => setCurrentScreen("login")}
                className="button-success"
            >
                Login
            </button>
        </div>
    );
};

export default MainScreen;
