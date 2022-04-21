import UserModel from "../model/userModel.js";
import { main } from "../utils/sendMail.js";

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
  let { name, email, message } = req.body;

  const userModel = new UserModel({
    name: name,
    email: email,
    message: message,
  });
  try {
    const savedUser = await userModel.save();
    main(email, name);
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
        message: req.body.message,
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

export const userWelcome = async (req, res) => {
  try {
    res.status(200).send("Welcome to login page");
  } catch (error) {
    res.status(401).send("invalid token");
  }
};
