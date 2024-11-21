import { useState } from "react";
import MainContainer from "./components/MainContainer/MainContainer.jsx";

function App() {
  const [userChoice, setUserChoice] = useState(0); // Armazena a escolha do usuário
  const [didUserSubmited, setDidUserSubmited] = useState(false); // Verifica se o usuário clicou em Submit

  return (
    <div className="App">
      {/* Passando os estados e as funções para o MainContainer */}
      <MainContainer
        userChoice={userChoice}
        setUserChoice={setUserChoice}
        didUserSubmited={didUserSubmited}
        setDidUserSubmited={setDidUserSubmited}
      />
    </div>
  );
}

export default App;
