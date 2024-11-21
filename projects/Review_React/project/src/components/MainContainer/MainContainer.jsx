import React from "react";
import "./MainContainer.css";
import Buttons from "../Buttons/Buttons.jsx";
import Star from "../Star/Star.jsx";
import Text from "../Text/Text.jsx";
import ResultComp from "../Buttons/ResultComp.jsx";

const MainContainer = ({
userChoice,
setUserChoice,
didUserSubmited,
setDidUserSubmited,
}) => {
return (
    <div className="mainContainer">
      {/* Condicional para trocar entre o formulário e o resultado */}
    {didUserSubmited ? (
        // Mostra o resultado se o usuário clicou em Submit
        <ResultComp userChoice={userChoice} />
    ) : (
        // Mostra o formulário se ainda não foi enviado
        <>
        <Star />
        <Text />
          {/* Passando as funções necessárias para Buttons */}
        <Buttons
            setUserChoice={setUserChoice}
            setDidUserSubmited={setDidUserSubmited}
        />
        </>
    )}
    </div>
)};

export default MainContainer;
