require("dotenv").config();
require("./config/databse").connect();
const bcrypt = require("bcryptjs/dist/bcrypt");
const express = require("express");
const jwt = require("jsonwebtoken");
const auth = require(".//middleware/auth");

//importing user context
const User = require("./model/user");

const app = express();

app.use(express.json());

//logic goes here

app.get("/all", async (req, res) => {
  const user = await User.find({});

  try {
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
});

//Register
app.post("/register", async (req, res) => {
  //register logic
  try {
    //get user input
    const { firstName, lastName, email, password } = req.body;

    //validate user input
    if (!(email && password && firstName && lastName)) {
      res.status(400).send("All input is required");
    }
    //check if user already exist
    //validate if user exist in our database
    const oldUser = await User.findOne({ email });

    if (oldUser) {
      return res.status(400).send("User already exist.Please Login");
    }

    //Encrypt user password
    encryptedUserPassword = await bcrypt.hash(password, 10);

    //create user in our database
    const user = await User.create({
      first_name: firstName,
      last_name: lastName,
      email: email.toLowerCase(), //sanitize
      password: encryptedUserPassword,
    });

    //create token
    const token = jwt.sign(
      { user_id: user._id, email },
      process.env.TOKEN_KEY,
      {
        expiresIn: "5h",
      }
    );

    //save user token
    user.token = token;

    //return new user
    res.status(201).json(user);
  } catch (err) {
    console.log(err);
  }
  //our register logic ends here
});

//login
app.post("/login", async (req, res) => {
  //login logic
  try {
    //get user input
    const { email, password } = req.body;

    //validate user input
    if (!(email && password)) {
      res.status(400).send("All input is required");
    }

    //validate if user exist in our database
    const user = await User.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
      //create token
      const token = jwt.sign(
        { user_id: user._id, email },
        process.env.TOKEN_KEY,
        {
          expiresIn: "5h",
        }
      );

      //save user token
      user.token = token;

      //user
      return res.status(200).json(user);
    }
    return res.status(400).send("Invalid Credentials");

    //our logic ends here
  } catch (err) {
    console.log(err);
  }
});

app.post("/welcome", auth, (req, res) => {
  res.status(200).send("Welcome to my login page");
});

module.exports = app;
