import express from 'express'
import dotenv from "dotenv"
import connectDB from './src/db/index.js'
const app = express()
const port = 3000

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