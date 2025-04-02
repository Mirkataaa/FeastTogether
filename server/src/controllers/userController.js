import { Router } from "express";
import { isGuest , isAuth } from "../middlewares/authMiddleware.js";
import userService from "../services/userService.js";
import {getErrorMsg} from "../utils/errorUtil.js"


const userController = Router();

// * Registration

userController.post("/register", isGuest, async (req, res) => {
  const { username, email, password, rePass } = req.body;
  
  try {
      const userData = await userService.register(username, email, password, rePass);

      res.status(201).json({
          message: "Registration successful",
          user: userData,
      });

  } catch (err) {
      const errors = getErrorMsg(err);
      res.status(400).json({ message: errors });
  }
});

// * Login

userController.post("/login", isGuest, async (req, res) => {
    const { email, password } = req.body;
    try {
      const user = await userService.login(email, password);
      res.status(200).json({
        message: "Login successful",
        user: user
      });
    } catch (err) {
      const errors = getErrorMsg(err);
      res.status(401).json({ message: errors});
    }
  });

// * Logout

  userController.get("/logout", isAuth, (req, res) => {
    res.status(200).json({ message: "Logout successful" });
  });

// * Get profile
userController.get("/profile", isAuth, (req, res) => {
    const user = req.user;
    res.status(200).json({
      id: user._id,
      username: user.username,
      email: user.email,
    });
  });

  
export default userController;

