import express, { Express } from "express";

const app = express();

//Routes
//HTTP methods GET PUT POST DELETE
app.get('/', (req,res,next) => {
    res.json({message:"welcome to apis"})
})

export default app;
