import app from './app';
import { PORT } from './config/env.config';

// Starts MongoDB Connection
import './config/mongodb';


app.listen(PORT, () => {
    console.log(`API running on Port ${PORT}`);
})