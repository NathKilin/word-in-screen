// ___ 1° Importing modules and components
// React and hooks useState and useEffect 
import React, { useState, useEffect } from "react"; 
// Component main screen
import MainScreen from "./components/MainScreen"; 
// Component creating a user
import CreateUser from "./components/CreateUser"; 
// Component user login
import Login from "./components/Login"; 
// Component logged- in user dashboard
import UserDashboard from "./components/UserDashboard"; 
// Component list of Pokémon
import PokemonList from "./components/PokemonList"; 
// Import the CSS
import './App.css'; 

// 2° Create the main component
function App() {
    // Tracks which screen is currently displayed ("main", "create", "login", or "user")
    const [currentScreen, setCurrentScreen] = useState("main"); 
    // Stores the list of users
    const [userList, setUserList] = useState([]); 
    // Tracks the currently logged-in user
    const [loggedInUser, setLoggedInUser] = useState(null); 
     // Stores the list of Pokémon fetched from the API
    const [pokemons, setPokemons] = useState([]); 

    // 4° Handle side effects using useEffect
    useEffect(() => {
        // Load users from localStorage when the component mounts
        const storedUsers = JSON.parse(localStorage.getItem("users")) || []; // Retrieve saved users or initialize an empty list
        setUserList(storedUsers); // Update the user list state with stored users

        // Fetch Pokémon data when the component mounts
        fetch("https://pokeapi.co/api/v2/pokemon?limit=1025") // Request data for up to 1025 Pokémon from the PokéAPI
            .then((response) => response.json()) // Convert the response to JSON
            .then((data) => {
                // 5° Process the Pokémon data
                const enrichedPokemons = data.results.map((pokemon, index) => ({
                    ...pokemon, // Spread the Pokémon data (name and URL)
                    id: index + 1, // Add an ID based on the index (starting from 1)
                }));
                setPokemons(enrichedPokemons); // Update the Pokémon state with the processed data
            })
            .catch((err) => console.error("Erro ao buscar os Pokémon:", err)); // Log an error if the API request fails
    }, []); // Empty dependency array ensures this effect runs only once when the component mounts

    // 6° Define a logout function
    const logout = () => {
        setLoggedInUser(null); // Clear the logged-in user
        setCurrentScreen("main"); // Redirect to the main screen
    };

    // 7° Handle conditional rendering for different screens
    if (currentScreen === "main") {
        // Render the main screen with a Pokémon list
        return (
            <div>
                <MainScreen setCurrentScreen={setCurrentScreen} /> {/* Pass a function to change screens */}
                <PokemonList pokemons={pokemons} /> {/* Pass the list of Pokémon to the component */}
            </div>
        );
    }

    if (currentScreen === "create") {
        // Render the user creation screen
        return (
            <CreateUser
                userList={userList} // Pass the current user list
                setUserList={setUserList} // Pass the function to update the user list
                setCurrentScreen={setCurrentScreen} // Pass the function to change screens
            />
        );
    }

    if (currentScreen === "login") {
        // Render the login screen
        return (
            <Login
                userList={userList} // Pass the current user list
                setLoggedInUser={setLoggedInUser} // Pass the function to set the logged-in user
                setCurrentScreen={setCurrentScreen} // Pass the function to change screens
            />
        );
    }

    if (currentScreen === "user") {
        // Render the user dashboard screen
        return (
            <UserDashboard
                loggedInUser={loggedInUser} // Pass the currently logged-in user
                logout={logout} // Pass the logout function
            />
        );
    }

    // 8° Return null if no screen matches
    return null;
}

// 9° Export the main component
export default App; // Export the App component so it can be used in index.js
