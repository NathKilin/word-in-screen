import './App.css';
import {useState} from "react"
import ChildComp from './components/ChildComp';

function App() {
  const [counter, setCounter] = useState(0)
  const increaseCount = () => {
    setCounter(counter + 1)
  }

  const reduceCount = () => {
    setCounter(counter - 1)
  }

  return (
    <div className="App">
      <h1>Counter App</h1>
      <div className="counter-container">
        <button onClick={reduceCount}>-</button>
        <p>{counter}</p>
        <button onClick={increaseCount}>+</button>
        </div>  
        <ChildComp style={"color: blue"} title="Bababa" description='I ate something'></ChildComp>
      </div>
  );
}

export default App;
