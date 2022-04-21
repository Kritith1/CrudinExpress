import UserModel from "../model/userModel.js";
import jsonwebtoken from "jsonwebtoken";
import Bcrypt from "bcrypt";

export const allUser = async (req, res) => {
  try {
    const users = await UserModel.find();
    res.json(users);
  } catch (error) {
    res.json({ message: "No user found" });
  }
};
export const userDetails = async (req, res) => {
  try {
    const user = await UserModel.findById(req.params.id);
    res.json(user);
  } catch (error) {
    res.json({ message: error });
  }
};
export const createUser = async (req, res) => {
  let { userName, email, password } = req.body;
  password = Bcrypt.hashSync(password, 10);

  const userModel = new UserModel({
    userName: userName,
    email: email,
    password: password,
  });
  //creating token
  const token = jsonwebtoken.sign({ userName, email }, process.env.SECRET_KEY);
  //save token
  userModel.token = token;
  try {
    const savedUser = await userModel.save();
    res.send({
      savedUser,
      message: "user created successfully",
      statusCode: 200,
    });
  } catch (error) {
    res.json(error);
  }
  try {
    const savedUser = await userModel.save();
    res.send({
      savedUser,
      message: "user created successfully",
      statusCode: 200,
    });
  } catch (error) {
    res.json(error);
  }
};
export const userUpdate = async (req, res) => {
  try {
    const updateUser = await UserModel.findByIdAndUpdate(
      req.params.id,
      {
        name: req.body.name,
        email: req.body.email,
      },
      { new: true }
    );
    res.send(updateUser);
  } catch (error) {
    res.json({ message: error });
  }
};

export const userDelete = async (req, res) => {
  try {
    const _id = req.params.id;
    const removeUser = await UserModel.findByIdAndDelete(_id);
    res.json({ message: "User Removed Sucesfully" });
  } catch (error) {
    res.json({ message: "Cannot delete user" });
  }
};
export const userLogin = async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    const userEmail = await UserModel.findOne({ email: email });
    if (Bcrypt.compareSync(password, userEmail.password)) {
      res.status(201).json({ message: "User login successfully" });
    } else {
      res.json({ message: "Invalid login details" });
    }
  } catch (error) {
    res.status(400).json({ message: "User not found" });
  }
};

export const userWelcome = async (req, res) => {
  try {
    res.status(200).send("Welcome to login page");
  } catch (error) {
    res.status(401).send("invalid token");
  }
};
