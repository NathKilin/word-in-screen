import React from 'react';
import Header from './components/Header.jsx';
import Home from './pages/Home.jsx';
import PokemonList from './components/PokemonList.jsx'

function App(){
  return (
    <div>
      <Header/>
      <Home />
      <PokemonList/>
    </div>
  )
}

export default App;