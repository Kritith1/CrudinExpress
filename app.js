import express from 'express';
import conn from './db/conn.js';
import userRouter from './routes/user.js';

const app = express();
conn;

app.use(express.json());
app.use("/user",userRouter)

app.get('/', (req, res) => {
    res.status(200).json({message: "Hello from my-express-app!"});
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`);
});
