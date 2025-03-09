import express from 'express';
import 'dotenv/config'; // Load environment variables
import connectDB from './src/db/index.js'; // Import the database connection
import { app } from './app.js';

// Connect to database and start the server
const PORT = process.env.PORT || 4000;

connectDB()
    .then(() => {
        app.listen(PORT, () => console.log(`⚙️ Server is running at port: ${PORT}`));
    })
    .catch((err) => {
        console.error("❌ MongoDB connection failed:", err);
        process.exit(1);
    });
