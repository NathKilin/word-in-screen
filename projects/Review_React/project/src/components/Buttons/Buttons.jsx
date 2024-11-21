import React from "react";
import "./Buttons.css";

const Buttons = (props) => {
const updateChoice = (e) => {
    // Atualiza a escolha do usuário com base no botão clicado
    props.setUserChoice(e.target.innerText);
    // Marca que o usuário clicou em Submit
    props.setDidUserSubmited(true);
};

return (
    <div>
    <div className="Numbers">
        {/* Cada botão chama a função updateChoice */}
        <span onClick={updateChoice}>1</span>
        <span onClick={updateChoice}>2</span>
        <span onClick={updateChoice}>3</span>
        <span onClick={updateChoice}>4</span>
        <span onClick={updateChoice}>5</span>
    </div>
      {/* O botão Submit também chama a mesma função */}
    <p onClick={updateChoice}>Submit</p>
    </div>
);
};

export default Buttons;
