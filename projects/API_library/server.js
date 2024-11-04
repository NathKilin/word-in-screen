const express = require('express');
const app = express();
const PORT = 3000;
const bookRoutes = require('./routes/books');

app.get('/', (req, res) => {
    res.send('Servidor está funcionando! Bem-vindo a bordo!');
});
  
app.listen(PORT, () => {
    console.log(`Servidor está escutando na porta ${PORT}`);
});

app.use('api', bookRoutes);
