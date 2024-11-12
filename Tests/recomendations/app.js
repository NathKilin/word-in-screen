const express = require('express');
const { MongoClient } = require('mongodb');
const path = require('path'); // Módulo path correto para manipulação de diretórios

const app = express();
const port = 3000;

const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri);

async function getMovies() {
    try {
        await client.connect();
        const db = client.db('Test');
        const collection = db.collection('movies_recomendations');
        const filmes = await collection.find({}).toArray();
        return filmes;
    } catch (error) {
        console.error("Error", error);
        return [];
    } finally {
        await client.close();
    }
}

// Configuração correta para servir a pasta 'user' com arquivos estáticos
app.use(express.static(path.join(__dirname, 'user')));

// Rota para retornar a lista de filmes
app.get('/movies', async (req, res) => {
    const filmes = await getMovies();
    res.json(filmes); // Envia os filmes como resposta JSON
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
