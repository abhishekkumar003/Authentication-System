import dotenv from 'dotenv';
dotenv.config();

import express, { json } from 'express';
import connectDb from './config/connectDb.js';

//import files
import userRoutes from './routes/userRoutes.js';

const app = express();

// port 
const PORT = process.env.PORT || 8000;

//database connection
connectDb();

//middleware
app.use(express.json());

// Load Routes
app.use("/api/user", userRoutes);



app.listen(PORT, ()=>{
    console.log(`server running at http://localhost:${PORT}`);
})
