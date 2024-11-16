//Model import
const Book = require("../models/bookModel.js");

//function to add user
const createBook = async (req, res) => {
    try{
        const {title, authorLname, authorFname, category} = req.body
        if (!title || !authorLname || !authorFname || !category){
            return res.status(400).send({
                status: "error",
                message: "all fields required!"
            })
        }
        const newBook = new Book({
            title, authorLname, authorFname, category        });
        await newBook.save()

        res.json({
            status: "success",
            data: newUser
        });
    } catch(error){
        console.log(error)
        if (error?.errorResponse?.code === 11000){
            res.status(400).send({
                status: "failed",
                message: "Book already exists"
            })
        }
        res.status(500)
    }
};

//function to get all users
const getAllBooks = async (req, res) => {
    try{
        const allBooks = await Book.find();
        if (!allBooks) {
            return res.status(404).send({
                status:"error",
                message: "No books yet"
            })
        }
        res.status(200).send({
            status:"sucess",
            data: allBooks
            // ???????
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            status: "error",
            message: `issue on the web server's side to fetch all books`
        })
    }
}

//function to get user by ID

//function to get user by name

//function to delete user by ID

//function to update user by ID

//function to update specific key-value by ID

module.exports = {
    createBook,
    getAllBooks
}