import mongoose from "mongoose";

interface IUser {
    email: string;
    password: string;
}

const schema = new mongoose.Schema<IUser>({
    email: { type: String, required: true },
    password: { type: String, required: true },
});

const User = mongoose.model('User', schema);

export { User, IUser };
