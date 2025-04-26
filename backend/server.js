import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import rateLimit from 'express-rate-limit';


import authRoutes from './routes/authRoutes.js';
import userRoutes from './routes/userRoutes.js';
import postRoutes from './routes/postRoutes.js';
import friendRoutes from './routes/friendRoutes.js';

const limiter = rateLimit({
    windowMs: 5 * 60 * 1000, // 15 minutes
    max: 50,                 // limit each IP to 100 requests per windowMs
    message: 'Too many requests from this IP, please try again after 5 minutes'
  });

dotenv.config();
const app = express();
connectDB();

app.use(cors());
app.use(express.json());
app.use(limiter);


app.use('/auth', authRoutes);
app.use('/users', userRoutes);
app.use('/posts', postRoutes);
app.use('/friends', friendRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
