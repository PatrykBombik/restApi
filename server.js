import express from 'express';
import mongoose from "mongoose";
import dotenv from 'dotenv';
import subscribersRouter from './routes/subscribers.js';

dotenv.config();
const app = express();

mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => {
        console.log('Failed to connect to MongoDB')
        console.log(err)
    });

const db = mongoose.connection;
db.on('error', (error) => {
    console.log('MongoDB Connection Error')
    console.error(error)
});
db.once('open', () => console.log('Connected to Database'));

app.use(express.json());

app.use('/subscribers', subscribersRouter);

app.listen(3000, () => console.log('Server has started'));

