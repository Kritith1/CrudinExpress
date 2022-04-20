import mongoose from "mongoose";
const UserModel = mongoose.model(
  "Login",
  mongoose.Schema(
    {
      userName: {
        type: String,
        unique: true,
        required: [true, "Please mention your username"],
        trim: true,
        match: [/^[A-Za-z][A-Za-z0-9_]{7,29}$/, "Please add a valid user name"],
      },
      email: {
        type: String,
        unique: true,
        required: [true, "Please enter your email"],
        trim: true,
        unique: true,
        match: [
          /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
          "Please add a valid email",
        ],
      },

      password: {
        type: String,
        required: true,
        trim: true,
      },
    },
    { timestamps: true }
  )
);
export default UserModel;
