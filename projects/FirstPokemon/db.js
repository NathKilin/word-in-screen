const { MongoClient } = require("mongodb");
require("dotenv").config();

const uri = process.env.MONGO_URI;

const client = new MongoClient(uri, {
    tls: true, // Habilitar TLS
    tlsInsecure: false, // Certifique-se de que os certificados são válidos
});

let db;

async function connectToDatabase() {
    try {
        await client.connect();
        db = client.db("pokemonGame");
        console.log("Conectado ao MongoDB");
    } catch (error) {
        console.error("Erro ao conectar ao MongoDB:", error);
        process.exit(1);
    }
}

function getDatabase() {
    if (!db) {
        throw new Error("Banco de dados não conectado");
    }
    return db;
}

module.exports = { connectToDatabase, getDatabase };
