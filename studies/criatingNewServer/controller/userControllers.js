//Model import
const User = require("../models/userModel.js")

//function to test server

//function to add user
const createUser = async (req, res) => {
    try{
        const {fName, lName, email, favoriteBooks} = req.body
        if (!fName || !lName || !email){
            return res.status(400).send({
                status: "error",
                message: "Complete name and email required"
            })
        }
        const newUser = new User({
            fName, lName, email, favoriteBooks
        });
        await newUser.save()

        res.json({
            status: "success",
            data: newUser
        });
    } catch(error){
        console.log(error)
        if (error?.errorResponse?.code === 11000){
            res.status(400).send({
                status: "failed",
                message: "User already exists"
            })
        }
        res.status(500)
    }
};

//function to get all users
const getAllUsers = async (req, res) => {
    try{
        const allUsers = await User.find();
        if (!allUsers) {
            return res.status(404).send({
                status:"error",
                message: "No users yet"
            })
        }
        res.status(200).send({
            status:"sucess",
            data: allUsers
            // ???????
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            status: "error",
            message: `issue on the web server's side to fetch all users`
        })
    }
}

//function to get user by ID

//function to get user by name

//function to delete user by ID

//function to update user by ID

//function to update specific key-value by ID

module.exports = {
    createUser,
    getAllUsers
}