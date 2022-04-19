const express = require("express");
const mongoose = require("mongoose");

const app = express();
const userRouter = require("./routes/user.routes");

const db = mongoose
  .connect(
    "mongodb+srv://kritithapa:helloworld@mongocrud.8nyhg.mongodb.net/Portfolio?retryWrites=true&w=majority",
    {}
  )
  .then((response) => {
    console.log("Connected to the database...");
    return response;
  });

app.use(express.json());
app.use("/users", userRouter);

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello from my-express-app!" });
});

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
