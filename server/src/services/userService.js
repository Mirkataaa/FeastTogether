import jwt from "../lib/jwt.js";
import User from "../models/User.js";
import bcrypt from "bcrypt";

const userService = {
    async register(username , email , password , rePass) {
        const user = await User.findOne().or([{email} , {username}]);

        console.log(rePass);
        

        if(password !== rePass) {
            throw new Error('Passwords missmatch!');
        }

        if(user) {
            throw new Error('User already exists!');
        }

        const newUser = await User.create({
            username,
            email,
            password,
        });

    const token = await this.generateToken(newUser);

    return {
        _id: newUser._id,
        username: newUser.username,
        email: newUser.email,
        accessToken: token 
    };

    },
    async login(email , password) {

        const user = await User.findOne({ email });

        if (!user) {
            throw new Error('Invalid user or password!');
        }
    
        const isValid = await bcrypt.compare(password , user.password);
    
        if (!isValid) {
            throw new Error('Invalid user or password!');
        }
    
        const token = await this.generateToken(user);
    
        return {
            _id: user._id,
            email: user.email,
            username: user.username,
            accessToken: token,  
        };
    },
    async generateToken(user) {
        const payload = {
            _id: user._id,
            email: user.email,
            username: user.username,
        };
    
        const header = { expiresIn: '2h' };
        return jwt.sign(payload, process.env.JWT_SECRET, header);
    }
};

export default userService;
