// console.log('welcome');
import dotenv from 'dotenv';
import app from './src/App';

dotenv.config();

const StartServer  = () => {
    const PORT = process.env.PORT || 3000;

    app.listen(PORT , () => {
        console.log(`server is running on ${PORT}`);
    })
}

StartServer();
