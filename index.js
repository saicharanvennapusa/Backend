import express from 'express'
import dotenv from "dotenv"
import connectDB from './src/db/index.js'
import { app } from "./app.js"
import fs from 'fs';
dotenv.config({
    path: './.env'
})

app.get('/', (req, res) => {
    res.send('Hello World!')
})


connectDB()
    .then(() => {
        app.listen(process.env.PORT || 8080, () => {
            console.log(`Server is running at ${process.env.PORT}`);

        })
    })
    .catch((err) => {
        console.log("MONGO FAILED", err);
    })