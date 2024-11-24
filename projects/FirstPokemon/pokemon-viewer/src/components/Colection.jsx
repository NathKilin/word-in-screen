import React, { useState, useEffect } from "react";
import "../styles/PokemonList.css";

function PokemonList() {

    // making the variable to store the list of Pokémons
    // using 'useState' to allow changes in the data
    // const [current value, function to update] = useState(initial value = empty)
    const [pokemons, setPokemons] = useState([]);

    // Variable to indicate if the data is still loading
    // Starts as true because we are waiting for api answers 
    const [loading, setLoading] = useState(true);

    // useEffect:
    // What to do (the function) and when to do it (the dependencies [])
    useEffect(() => {
        // Function to fetch Pokémon data from the API
        async function fetchPokemons() {
            try {
                // Fetching a list of 1302 Pokémon from the API
                // using the URL (Uniform Resource Locator) to fetch information
                const response = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=1152');
                // about the URL: 
                // https__________The secure protocol used to access the resource.
                // pokeapi.co_____The main domain that Indicates the server hosting.
                // api____________Directory identifying that we are accessing the site's API.
                // v2_____________The version of the API (we´re using the 2°)
                // pokemon________The API endpoint
                // the ?__________An additional parameter to adjust the response.
                // limit=1302_____Requests up to 1302 Pokémon.

                // Converting the response into a JSON object
                const data = await response.json();

                // variable that stores all the detail of each pokémon
                // using Promise to execute all api calls at the same time and
                // waits to all of them to be concluded
                const detailedPokemons = await Promise.all(
                    // fetching details For each Pokémon using the URL
                    data.results.map(async (pokemon) => {
                        // Fetch details
                        const detailsResponse = await fetch(pokemon.url); 
                        // Convert to JSON
                        const details = await detailsResponse.json(); 

                        // return an object with all the info for each Pokémon
                        return {
                            // for pokémon name
                            name: pokemon.name, 
                            // for pokémon ID
                            id: details.id, 
                            // for pokémon types 
                            types: details.types.map((typeInfo) => typeInfo.type.name), 
                            //for statistics
                            stats: details.stats.map((stat) => ({
                                // for each stat name
                                name: stat.stat.name, 
                                //for its value
                                value: stat.base_stat
                            })), 
                            // for Pokémon image (front)
                            image: details.sprites.front_default, 
                            // other options:
                            // back_default
                            // front_shiny
                            // back_shiny
                        };
                    })
                );

                // Update the state with the list of detailed Pokémon
                setPokemons(detailedPokemons);
            } catch (error) {
                // If something goes wrong, log the error in the console
                console.error('Couldn´t fetch Pokélist. Error: ', error);
            } finally {
                // Loading is done, whether it succeeded or failed
                setLoading(false);
            }
        }

        // Calling the function to fetch the data
        fetchPokemons();
        // The empty array [] means this runs only once when the component is first loaded
    }, []);

    // If the data is still loading, show this text
    if (loading) {
        return <p>Loading Pokémon...</p>;
    }

    // If the data has finished loading, build and display the Pokémon cards
    return (
        // Container for all Pokémon cards
        <div className="pokemon-grid">
            {/* Loop through the Pokémon array and create a card for each Pokémon */}
            {pokemons.map((pokemon) => (
                <div className="pokemon-card" key={pokemon.id}>
                    {/* Pokémon image */}
                    <img
                        className="pokemon-image"
                        src={pokemon.image}
                        // for pokémon name
                        alt={pokemon.name}
                    />
                    {/* Pokémon name */}
                    <h3 className="pokemon-name">{pokemon.name}</h3>
                    {/* Pokémon ID */}
                    <p className="pokemon-id">{pokemon.id}°</p>
                    {/* Pokémon types */}
                    <p className="pokemon-types">
                        {/* Join the types with commas */}
                        Types: {pokemon.types.join(", ")} 
                    </p>
                    {/* Pokémon stats */}
                    <div className="pokemon-stats">
                        <h4>Stats:</h4>
                        <ul>
                            {/* Loop through the stats array and display each stat */}
                            {pokemon.stats.map((stat, index) => (
                                <li key={index}>
                                    {stat.name}: {stat.value}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default PokemonList;
