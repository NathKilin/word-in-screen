import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Pokeball from './components/Pokeball.jsx'

//import components
import Button from './components/Button.jsx'

const users = [
  {id: 1, name: "John Doe", email: "jdoe@gmailcom"},
  {id: 2, name: "Robert Reygle", email: "robertreygle@gmailcom"},
  {id: 3, name: "Mary MaCary", email: "mCary@gmailcom"}
];

function App() {
  const [count, setCount] = useState(0);
  const usersLi = users. map((user) => (
    <li key={`user -${user.id}`}
    >{user.name}</li>
  ));

  console.log(count);
  

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <Button setCount={setCount}>
          count is {count} 
          <ul>{usersLi}</ul>
          </Button>
    <Pokeball></Pokeball>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
