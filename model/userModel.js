import mongoose from "mongoose";
const UserModel = mongoose.model(
  "Portfolio",
  mongoose.Schema(
    {
      name: {
        type: String,
        unique: true,
        required: true,
        trim: true,
      },
      email: {
        type: String,
        required: [true, "Please enter your email"],
        trim: true,
        unique: true,
        match: [
          /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
          "Please add a valid email",
        ],
      },

      message: {
        type: String,
      },
    },
    { timestamps: true }
  )
);
export default UserModel;
