import dotenv from 'dotenv';

dotenv.config();

const   PORT            = process.env.PORT ?? 5000,
        MONGODB_URL     = process.env.MONGODB_URL ?? "mongodb://localhost:27017/",
        MONGODB_NAME    = process.env.MONGODB_NAME ?? "flydevs_challenge"




export {
    PORT,
    MONGODB_URL,
    MONGODB_NAME
}