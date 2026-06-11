import mongoose from "mongoose";

import dotenv from "dotenv"

dotenv.config()

const dbConnnection = process.env.MONGODB_URL


const connectDB = async () => {
    try {
        await mongoose.connect(dbConnnection);
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('MongoDB connection failed:', error.message);
      
    }
};

export default connectDB