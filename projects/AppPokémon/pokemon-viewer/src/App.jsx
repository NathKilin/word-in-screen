import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";
import AddPokemon from "./pages/AddPokemon";
import { getAllPokemon, getPokemon } from "./services/api";
import "./App.css";

function App() {
  const [pokemonData, setPokemonData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1); // Página atual
  const [totalPages] = useState(10); // Total de páginas
  const itemsPerPage = 100; // Pokémon por página

  const apiURL = `https://pokeapi.co/api/v2/pokemon?limit=1000`; // URL da API para obter 1000 Pokémon

  useEffect(() => {
    async function fetchData() {
      let response = await getAllPokemon(apiURL);
      // Obter os Pokémon da página atual
      const pageData = response.results.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
      );
      await loadPokemon(pageData);
      setLoading(false);
    }
    fetchData();
  }, [currentPage]);

  // Carregar detalhes dos Pokémon
  const loadPokemon = async (data) => {
    let _pokemonData = await Promise.all(
      data.map(async (pokemon) => {
        let pokemonGet = await getPokemon(pokemon);
        return pokemonGet;
      })
    );
    setPokemonData(_pokemonData);
  };

  return (
    <Router>
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                pokemons={pokemonData}
                loading={loading}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                totalPages={totalPages}
              />
            }
          />
          <Route path="/details" element={<Details />} />
          <Route path="/add-pokemon" element={<AddPokemon />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
