const express = require('express');
const app = express();
const PORT = 3000;
const animalsRoutes = require('./animalRoutes.js')
app.use(express.json())


app.get('/', (req, res) => {
    res.send("Hello, there!")
})



app.listen(PORT,  () => {
    console.log(`Server running on port ${PORT}`);
    
})