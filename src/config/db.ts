import mongoose from 'mongoose';
// import { config } from './config';
import { config } from 'dotenv';

config();


const connectDB = async () => {
    await mongoose.connect(process.env.MONGO_URI as string)
    try {
        mongoose.connection.on('connection', () => {
            console.log('connection is Successful!')
        })
        mongoose.connection.on('error', (error) => {
            console.log('Failed to connect!', error)
        })





    } catch (error) {
        console.log('Failed to connect ');
        console.log(error);
        process.exit(1);

    }
}

export default connectDB;



