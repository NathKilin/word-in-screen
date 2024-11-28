const express = require('express');
const bcrypt = require('bcrypt');

const app = express();
const PORT = 3000;
const saltRounds = 10; // Number of salt rounds for hashing
const hashKey = "ey)7P_6xG|caW/[ZViqZufpemyVDA#"; // Secret key for password salting

const dummyUser = {}; // In-memory user storage for this example

app.use(express.json()); // Middleware to parse JSON bodies

// Initial route to check server functionality
app.get('/', (req, res) => {
    res.status(200).send({
        message: "Hello from the server!"
    });
});

// Sign-up route: registers a new user
app.post('/sign-up', async (req, res) => { 
    try {
        const { email, password } = req.body; // Extract email and password from request body

        // Hashing the password with an additional hash key
        const hashedPassword = await bcrypt.hash(password + hashKey, saltRounds);

        // Save user details in the dummy storage
        dummyUser.email = email;
        dummyUser.password = hashedPassword;

        // Respond with the hashed password
        return res.send({
            hashedPassword
        });

    } catch (error) {
        // Handle errors gracefully and send a proper response
        return res.status(500).send({
            error: "Internal server error",
            details: error.message
        });
    }
});

// Sign-in route: authenticates a user
app.post('/sign-in', async (req, res) => {
    try {
        const { email, password } = req.body; // Extract email and password from request body

        // Check if the email exists in the dummy storage
        if (dummyUser.email !== email) {
            return res.status(401).send({
                status: "error",
                message: "No such user!"
            });
        }

        // Compare the provided password with the stored hashed password
        const isCorrectPassword = await bcrypt.compare(password + hashKey, dummyUser.password);

        if (isCorrectPassword) {
            // Password is correct; send a success response
            return res.status(200).send({
                status: "success",
                message: "Welcome",
                data: dummyUser.email
            });
        } else {
            // Password is incorrect; send an error response
            return res.status(401).send({
                status: "error",
                message: "Invalid password!"
            });
        }
    } catch (error) {
        // Handle any server-side errors
        return res.status(500).send({
            status: "error",
            message: "Internal server error",
            details: error.message
        });
    }
});

// Start the server on the specified port
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
