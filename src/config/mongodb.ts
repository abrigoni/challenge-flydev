import mongoose from 'mongoose';
import { MONGODB_NAME, MONGODB_URL } from './env.config';


mongoose.connect(MONGODB_URL+MONGODB_NAME)
    .then((_) => {
        console.log("Connected to MongoDB Database")
    })
    .catch((err) => {
        console.error(err);
    })
