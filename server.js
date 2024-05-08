import express from 'express';
import mongoose from "mongoose";

const app = express();

mongoose.connect('mongodb://localhost/subscribers', { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', (error) => console.error(errpr));
db.once('open', () => console.log('Connected to Database'));

app.listen(3000, () => console.log('Server has started'));

