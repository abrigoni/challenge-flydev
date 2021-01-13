import mongoose, { Schema } from 'mongoose';


interface IUser extends mongoose.Document {
    name: string;
    lastName: string;
    age: string;
}


const UserSchema = new Schema({
    name: String,
    lastName: String,
    age: Number
});


export default mongoose.model<IUser>('User', UserSchema);