import express from "express";
import { PORT, mongoDB } from "./config.js";
import mongoose from "mongoose";
import { Game } from "./models/gameModel.js";
import gamesRoute from './routes/gamesRoute';
import cors from 'cors';
const app = express();

app.use(express.json());

app.use(cors());

app.get('/', (request, response) => {
    console.log(request)
    return response.status(234).send('testing project');
});

app.use('/games', gamesRoute);
mongoose
    .connect(mongoDB)
    .then(() => {
        console.log('you are connected to the DB');
        app.listen(PORT, () => {
            console.log(`listening on port: ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });
