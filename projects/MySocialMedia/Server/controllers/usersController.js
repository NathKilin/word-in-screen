const User = require("../models/usersModel.js");

const {
  makeHashedPassword,
  signInAuth,
  creatToken,
} = require("../auth/auth.js");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

//  get all users
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});

    res.json(users);
  } catch (err) {
    console.log(err);
    res.status(500).send({ err });
  }
};

// get user by id
async function getUsereById(req, res) {
  let user;
  try {
    user = await User.findById(req.params.id);
    if (user === null) {
      return res.status(404).json({ massege: "id not found" });
    }
    res.status(200).send({ user });
  } catch (error) {
    return res.status(500).json({ massege: error.massege });
  }
}

//   add user
const addUser = async (req, res) => {
  const { firstName, lastName, userName, email, phone, password } = req.body;
  if (!firstName || !lastName || !userName || !email || !phone || !password) {
    res.status(401).send({ massege: "bad request" });
  }

  try {
    const hashedPassword = await makeHashedPassword(
      password,
      process.env.BCRYPT_KEY,
      process.env.SALT_NUM
    );
    console.log(req.body.password);
    console.log(process.env.BCRYPT_KEY);
    console.log(process.env.SALT_NUM);
    console.log(hashedPassword);

    const newUser = new User({
      firstName,
      lastName,
      userName,
      email,
      phone,
      password: hashedPassword,
    });

    const savedUser = await newUser.save();
    const id = savedUser._id;
    res.send({
      message: "seve this id to delete or update the user latter on",
      id,
    });
  } catch (error) {
    // check if it mongoose error
    if (error.name === "ValidationError") {
      return res.status(400).send({
        message: "Validation error occurred.",
        error: error.message,
      });
    } else if (error.code === 11000) {
      return res.status(409).send({
        message: "Duplicate key error. This user already exists.",
        error: error.message,
      });
    } else {
      console.error(error);
      return res.status(500).send({ error });
    }
  }
};

// sign in
const signIn = async (req, res) => {
  try {
    if (!req.body.password) {
      return res.status(400).send({ massege: "password requiere" });
    }

    const id = req.params.id;
    const user = await User.findById(id);
    const hashedPassword = user.password;
    const isMatch = await signInAuth(req.body.password, hashedPassword);

    if (isMatch === false) {
      return res
        .status(401)
        .send({ success: false, message: "Wrong password" });
    }

    const token = await creatToken(id, process.env.JWT_KEY);
    console.log(token);

    res
      .status(200)
      .send({ success: true, message: "Login successfuly", token });
  } catch (error) {
    return res.status(500).send({ error });
  }
};

const lightSignIn = async (req, res) => {
  try {
    const { userName, email } = req.body;
    if (!userName || !email) {
      return res.status(400).send({ massege: "userName and email required" });
    }

    const user = await User.find({ userName: userName });

    if (!user) {
      return res.status(401).send({ massege: "wrong user Name" });
    } else if (user[0].email !== email) {
      return res.status(401).send({ massege: "wrong email" });
    }
    return res.status(200).send({ massege: "you are realy you!!" });
  } catch (error) {
    return res.status(500).send({ error });
  }
};

//   update user
const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { firstName, lastName, userName, phone, email, password } = req.body;
    const filedsToUpdate = {};

    if (firstName || firstName !== "") {
      filedsToUpdate.firstName = firstName;
    }

    if (lastName || lastName !== "") {
      filedsToUpdate.lastName = lastName;
    }

    if (userName || userName !== "") {
      filedsToUpdate.userName = userName;
    }

    if (phone || phone !== "") {
      filedsToUpdate.phone = phone;
    }

    if (email || email !== "") {
      filedsToUpdate.email = email;
    }

    if (password || password !== "") {
      const hashedPassword = await makeHashedPassword(
        password,
        process.env.BCRYPT_KEY,
        process.env.SALT_NUM
      );
      filedsToUpdate.password = hashedPassword;
    }

    await User.findByIdAndUpdate(id, filedsToUpdate, {
      runValidators: true,
    });
    res.send({ message: "updated successfully" });
  } catch (err) {
    res.send({ error: `${err}` });
  }
};

// delete user
const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);

    const deletedUser = await User.findByIdAndDelete(id);

    if (!deletedUser) {
      return res.status(404).send({ message: "user not found" });
    }

    res.send({ message: "deleted successfully" });
  } catch (error) {
    res.status(500).send({ error });
  }
};

module.exports = {
  getAllUsers,
  addUser,
  getUsereById,
  updateUser,
  deleteUser,
  signIn,
  lightSignIn,
};
