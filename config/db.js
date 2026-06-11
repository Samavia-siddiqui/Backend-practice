import mongoose from "mongoose";
import chalk from "chalk";
import dotenv from "dotenv"

dotenv.config()

const dbConnnection = process.env.MONGODB_URL


const connectDB = async () => {
    try {
        await mongoose.connect(dbConnnection);
        console.log(chalk.bgGreen.bold('MongoDB connected successfully'));
    } catch (error) {
        console.error('MongoDB connection failed:', error.message);
      
    }
};

export default connectDB