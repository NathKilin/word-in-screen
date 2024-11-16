//import express and mongoose
const express = require("express");
const mongoose = require("mongoose");

//import and set up dot.env
require('dotenv').config();

//criate an express ENTITY
const app = express();

//import user from model
const user = require("./models/userModel.js");

//import book from model
const book = require("./models/bookModel.js");

//import routers for both of them
const userRouter = require("./routers/userRouter.js");
const bookRouter = require("./routers/bookRouter.js");

//name your port
const PORT = 3000

// access and save uri from env
const db_URI = process.env.db_URI

// ????????????
app.use(express.json())

//conect the uri
mongoose.connect(db_URI).then(() => {
    console.log("DB conected");
})

//test your server
app.get("/", (req, res) => {
    res.send("Hello World!")
})

//seting up apis
app.use('/api/users', userRouter)

//waking up the app to listen
app.listen(PORT, () =>{
    console.log(`Server running on port ${PORT}
        ;D`);
})