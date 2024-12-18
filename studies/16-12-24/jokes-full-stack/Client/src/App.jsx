import { useState } from 'react'
import axios from 'axios';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function fetchJoke () {
    axios.get('http://localhost:3000/apu/v1/jokes/random')
  }
  
  return (
    <>
      <div>
      </div>
    </>
  )
}

export default App
