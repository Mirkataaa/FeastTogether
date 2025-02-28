import { Schema , Types , model } from "mongoose";
import bcrypt from "bcrypt";


const SALT_ROUNDS = 10;

const userSchema = new Schema({
    username: {
        type: String,
        required:[true , 'Username is required!'],
        minLength: [4, 'Username is too short!'],
    },
    email: {
        type: String,
        required:[true, 'Email is required!'],
        minLength: [10, 'Email is too short!'],
    },
    password: {
        type: String,
        required:[true, 'Password is required!'],
        minLength: [4, 'Password is too short!']
    },
    // ! Check if role is really needed 
    role: {
        type: String,
        default: 'user',
    },
    // TODO: Add profile picture eventually
    // profilePicture: {
    //     type: String,
    //     default: '' 
    // }
});

userSchema.pre('save' , async function () {
    const hash = await bcrypt.hash(this.password , SALT_ROUNDS);
    this.password = hash;
});

const User = model('User' , userSchema);

export default User;