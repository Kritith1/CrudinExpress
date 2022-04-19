import express, { json } from "express";
import userRouter from "./routes/user.routes.js";
import mongoose from "mongoose";

const app = express();

mongoose
  .connect(
    "mongodb+srv://kritithapa:helloworld@mongocrud.8nyhg.mongodb.net/Portfolio?retryWrites=true&w=majority",
    {}
  )
  .then((response) => {
    console.log("Connected to the database...");
    return response;
  });

app.use(json());
app.use("/users", userRouter);

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello from my-express-app!" });
});

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
