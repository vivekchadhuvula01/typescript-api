// console.log('welcome');
// import dotenv from 'dotenv';
import app from './src/App';
import { config } from './src/config/config';
import connectDB from './src/config/db';

// dotenv.config();

const StartServer = async () => {

    await connectDB();

    const PORT = config.PORT || 3000;

    app.listen(PORT , () => {
        console.log(`server is running on ${PORT}`);
    })
}

StartServer();
