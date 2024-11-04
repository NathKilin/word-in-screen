const express = require('express');
const app = express();
const PORT = 3000;
const bookRoutes = require('./routes/books');

app.use(express.json()); // Necessário para processar JSON no body das requisições

app.get('/', (req, res) => {
    res.send('Servidor está funcionando! Bem-vindo a bordo!');
});

app.use('/api', bookRoutes); // Correção aqui

app.listen(PORT, () => {
    console.log(`Servidor está escutando na porta ${PORT}`);
});
