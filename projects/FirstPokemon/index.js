const express = require("express");
const { connectToDatabase } = require("./db"); // Importa o arquivo db.js

const app = express();
const PORT = 3001;

// Middleware para lidar com JSON
app.use(express.json());

// Conectar ao MongoDB antes de iniciar o servidor
connectToDatabase().then(() => {
    app.listen(PORT, () => console.log(`Servidor rodando em http://localhost:${PORT}`));
});
