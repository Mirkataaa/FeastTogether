import { Router } from "express";
import userController from "./controllers/userController.js";


const routes = Router();

routes.use('/api/user', userController);

export default routes;