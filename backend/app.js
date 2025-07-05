import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { dbConnection } from './database/dbConnection.js';
import { errorMiddleware } from './error/error.js';
import reservationRouter from './routes/reservationRoutes.js';

const app = express();
dotenv.config({ path: './config/config.env' });
app.use(cors(
    {
        origin: [process.env.FRONTENT_URL], // Allow all origins by default, can be overridden by environment variable
        methods: ['POST'],
        credentials: true, // Allow credentials if needed
    }
));
app.use(express.json()); // Parse JSON bodies
app.use('/api/v1/reservation', reservationRouter); // Use the reservation routes
app.use(express.urlencoded({ extended: true })); 
dbConnection();// Parse URL-encoded bodies
app.use(errorMiddleware); // Error handling middleware

export default app;

