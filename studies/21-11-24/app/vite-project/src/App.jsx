import { useState } from 'react'

import './App.css'
import Home from './Pages/Home/Home.jsx'
import About from './Pages/About/About.jsx'
import Dashboard from './Pages/Dashboard/Dashboard.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Adashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
