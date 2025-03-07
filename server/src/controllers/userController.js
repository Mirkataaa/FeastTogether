import { Router } from "express";
import { isGuest , isAuth } from "../middlewares/authMiddleware.js";
import userService from "../services/userService.js";
import User from "../models/User.js";
import { AUTH_COOKIE_NAME } from "../constants.js";
import {getErrorMsg} from "../utils/errorUtil.js"


const userController = Router();

// * Registration

userController.post("/register", isGuest, async (req, res) => {
    const { username, email, password, rePassword } = req.body;
  
    try {
      const token = await userService.register(
        username,
        email,
        password,
        rePassword
      );
      const user = await User.findOne({ email });
      res.cookie(AUTH_COOKIE_NAME, token, {
        httpOnly: true,
        secure: true,
        maxAge: 3600000,
        sameSite: "lax",
      });
  
      res.status(201).json({
        message: "Registration successful",
        user: {
          id: user._id,
          username: user.username,
          email: user.email,
          role: user.role,
        },
      });
    } catch (err) {
      const errors = getErrorMsg(err);
  
      res.status(400).json({ message: "Registration failed", errors });
    }
  });

// * Login

userController.post("/login", isGuest, async (req, res) => {
    const { email, password } = req.body;
    try {
      const token = await userService.login(email, password);
      const user = await User.findOne({ email });
      res.cookie(AUTH_COOKIE_NAME, token, {
        httpOnly: true,
        secure: true,
        sameSite: "Lax",
        maxAge: 3600000,
      });
      res.status(200).json({
        message: "Login successful",
        user: {
          id: user._id,
          username: user.username,
          email: user.email,
          role: user.role,
        },
      });
    } catch (err) {
      const errors = getErrorMsg(err);
      res.status(401).json({ message: "Login failed", errors });
    }
  });

// * Logout

  userController.get("/logout", isAuth, (req, res) => {
    res.clearCookie(AUTH_COOKIE_NAME);
  
    res.status(200).json({ message: "Logout successful" });
  });

// * Get profile

// * Get profile
userController.get("/profile", isAuth, (req, res) => {
    const user = req.user;
    res.status(200).json({
      id: user._id,
      username: user.username,
      email: user.email,
      role: user.role,
    });
  });

  
export default userController;

