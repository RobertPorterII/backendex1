import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import dotenv from "dotenv";
import projectsRouter from './routes/projects.js';
import cors from 'cors';

// remember to change project name in .env if using same mongoose URI


dotenv.config();
const app = express();
const PORT = process.env.PORT || 3500

// Connect to DB

try {
    await mongoose.connect(process.env.MONGODB_URI)
    console.log("Connected to mongodb");
    
} catch (error) {
    console.log(error);
    
    
}

// middleware
app.use(morgan('dev')); // logger
app.use(express.json()); // parse data to the body
app.use(express.urlencoded({extended: true}));
app.use(cors()); // allows backend to talk to frontend in the same machine


// routes
app.use('/api/projects', projectsRouter);

app.get("/", (req, res) => {
    res.send("Welcome to the API")
});



// Error Middleware


app.use((e, req, res, next) => {
    console.log(e);
    res.status(500).json({message: e.message, error: e});
    
});




app.listen(PORT, () => console.log(`Server running on port ${PORT}`));