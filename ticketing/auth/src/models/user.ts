import mongoose from "mongoose";
import { Password } from "../services/password";

interface IUser {
    email: string;
    password: string;
}

const schema = new mongoose.Schema<IUser>({
    email: { type: String, required: true },
    password: { type: String, required: true },
});

// Must NOT be an arrow function otherwise "this"
// will be the outer context
schema.pre('save', async function(done) {
    // Mongoose considers a password modified
    // also on the first insert
    if (this.isModified('password')) {
        const hashed = await Password.toHash(this.get('password'));
        this.set('password', hashed);
    }
    done();
});

const User = mongoose.model('User', schema);

export { User, IUser };
