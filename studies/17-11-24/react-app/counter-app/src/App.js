import { useState } from "react";
import FormComp from './components/FormComp.jsx'
import ResultComp from './components/ResultComp.jsx'

function App() {
  const [userChoice, setUserChoice] = useState(0)
  const [didUserSubmited, setDidUserSubmited] = useState(false);

  return (
    <div className="App">
      Choose a Number
      {didUserSubmited ? (
        <ResultComp userChoice={userChoice}/>
      ) : (
        <FormComp 
        updateFunction={setUserChoice}
        setDidUserSubmited={setDidUserSubmited}/>
      )}
    </div>
  );
}

export default App;