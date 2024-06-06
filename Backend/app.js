import express from "express";
import cors from "cors";
import dotenv from 'dotenv';
import { dbConnection } from "./database/dbConnection.js";
import { errorMiddleware } from "./middlewares/error.js";
import reservationRouter from './routes/reservationRoute.js';
import userRouter from './routes/userRoute.js'; 

dotenv.config({path:"./config/config.env"});

const app = express();

// Middleware
app.use(cors({
  origin: [process.env.FRONTEND_URL],
  methods: ["POST"],
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/v1/reservation', reservationRouter);
app.use('/api/v1/users', userRouter); // Mounting user routes

// Database connection
dbConnection();

// Error handling middleware
app.use(errorMiddleware);

export default app;
