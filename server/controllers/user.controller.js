import UserModel from "../models/user.model.js";
import mongoose from "mongoose";
export async function createOneRequest(req, res) {
  // req.body is for POST requests. Think 'body of the postman'
  // destruct the name value from the request body
  const { name } = req.body;

  // check if database already contains this name
  const foundUser = await find({ name });

  // if no user is found, we can add this user to the database.
  if (!foundUser || foundUser.length == 0) {
    const user = new UserModel({ name });
    const response = await user.save();
    res.status(201).json(response);
  } else {
    res.status(409).json({ message: "User already exists!" });
  }
}

export async function readOneRequest(req, res) {
  // Best request is GET, we can get the ID from the request
  // parameters.
  const { id } = req.params;

  // attempt to retrieve user
  const foundUser = await findOne({ _id: id });

  // return 404 if no user found, return user otherwise.
  if (!foundUser || foundUser.length == 0) {
    res.status(404).json({ message: "User not found!" });
  } else {
    res.status(302).json(foundUser);
  }
}

export async function updateOneRequest(req, res) {
  const { id } = req.body;
  const foundUser = await findOne({ _id: id });
  if (foundUser || foundUser.length == 0) {
    const response = await foundUser.updateOne({ _id: id });
    res.status(301).json(response);
  } else {
    res.status(404).json({ message: `User not found...` });
  }
}

export async function deleteOneRequest(req, res) {
  const { id } = req.params;
  const foundUser = await findOne({ _id: id });
  if (foundUser || foundUser.length == 0) {
    const response = await foundUser.deleteOne({ _id: id });
    res.status(202).json(response);
  } else {
    res.status(404).json({ message: `User not found...` });
  }
}
