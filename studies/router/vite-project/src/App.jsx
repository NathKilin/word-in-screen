import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

//Components
import Home from "./pages/HomePage/HomePage.jsx"
import About from "./pages/About/About.jsx"
import Dashboard from "./pages/Dashboard/Dashboard.jsx"
import Articles from "./pages/Articles/Articles.jsx"
import Navbar from "./components/NavBar/Navbar.jsx"



function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/articles" element={<Articles />} >
            <Route path="news" element={<h2>This is News Section</h2>} />
            <Route path="politics" element={<h2>This is Politics Section</h2>} />
            <Route path="tech" element={<h2>This is Tech Section</h2>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
onabort