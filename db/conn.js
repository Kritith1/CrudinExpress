import mongoose from "mongoose";
import 'dotenv/config';

const CONN_URL=process.env.CONN_URI
const db = mongoose.connect(CONN_URL, {
    useNewUrlParser: true,
}).then((response) => {
    console.log('Connected to the database...');
    return response;
});

export default db;