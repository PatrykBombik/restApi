import express from 'express';
import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();
const app = express();

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', (error) => console.error(errpr));
db.once('open', () => console.log('Connected to Database'));

app.listen(3000, () => console.log('Server has started'));

