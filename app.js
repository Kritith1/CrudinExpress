import express from "express";
import conn from "./db/conn.js";
import userRouter from "./routes/user.js";
import projectRouter from "./routes/project.js";
import cors from "cors";

const app = express();
const corsOptions = {
  origin: "https://kritiportfolio.netlify.app/projects",
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.use(express.json());
app.use("/user", userRouter);
app.use("/project", projectRouter);

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello from my-express-app!" });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
