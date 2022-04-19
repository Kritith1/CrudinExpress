import mongoose from "mongoose";

const UserModel = new mongoose.model(
  "User",
  new mongoose.Schema(
    {
      name: {
        type: String,
      },
    },
    { timestamps: true }
  )
);

export default UserModel;
