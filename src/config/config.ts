import dotenv from "dotenv";

dotenv.config({
    path: '../../.env'
});


const __config = {
    PORT: process.env.PORT,
    // mongoDBURL: process.env.MONGODB_URI,

}

export const config = Object.freeze(__config);