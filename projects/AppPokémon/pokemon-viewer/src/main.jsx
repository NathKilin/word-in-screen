import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // Importa o componente principal
import "./App.css"; // Importa estilos globais

// Conecta o React ao HTML, renderizando o componente principal (App)
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
