import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CardPokemon from "../components/CardPokemon";
import "./Home.css";

const Home = ({
  pokemons,
  loading,
  currentPage,
  setCurrentPage,
  totalPages,
}) => {
  const [filteredPokemons, setFilteredPokemons] = useState(pokemons); 
  const [selectedType, setSelectedType] = useState(""); 
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setFilteredPokemons(pokemons);
  }, [pokemons]);

  const handleFilterChange = (type) => {
    if (type === "all") {
      setFilteredPokemons(pokemons);
      setSelectedType("");
    } else {
      const filtered = pokemons.filter((pokemon) =>
        pokemon.types.some((t) => t.type.name === type)
      );
      setFilteredPokemons(filtered);
      setSelectedType(type);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      window.scrollTo(0, 0); 
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo(0, 0); 
    }
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const handleSearchClick = (pokemon) => {
    navigate("/details", { state: { pokemon } });
  };

  const types = [
    "all",
    "fire",
    "water",
    "grass",
    "electric",
    "bug",
    "normal",
    "poison",
    "ground",
    "fighting",
    "psychic",
    "rock",
    "ghost",
    "ice",
    "dragon",
    "dark",
    "steel",
    "fairy",
  ];

  return (
    <div>
      <h2>Pokémon Viewer</h2>

      <div className="search-container">
        <input
          type="text"
          placeholder="Search Pokémon..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
        {searchQuery && (
          <div className="search-results">
            {pokemons
              .filter((pokemon) =>
                pokemon.name.toLowerCase().startsWith(searchQuery)
              )
              .slice(0, 5) 
              .map((pokemon, i) => (
                <div
                  key={i}
                  className="search-result-item"
                  onClick={() => handleSearchClick(pokemon)}
                >
                  {pokemon.name}
                </div>
              ))}
          </div>
        )}
      </div>

      {/* Filtro por Tipo */}
      <div className="filter-container">
        <label htmlFor="type-filter">Filter by Type:</label>
        <select
          id="type-filter"
          value={selectedType}
          onChange={(e) => handleFilterChange(e.target.value)}
        >
          {types.map((type) => (
            <option key={type} value={type}>
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </option>
          ))}
        </select>
      </div>

      {/* Estado de Carregamento ou Grid de Pokémon */}
      {loading ? (
        <p>Loading Pokémon...</p>
      ) : (
        <>
          <div className="grid-container">
            {filteredPokemons.map((pokemon, i) => (
              <CardPokemon key={i} pokemon={pokemon} />
            ))}
          </div>
          {/* Paginação */}
          <div className="pagination">
            <button onClick={handlePreviousPage} disabled={currentPage === 1}>
              Previous
            </button>
            <span>
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
