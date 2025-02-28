import { Router } from "express";
import userController from "./controllers/userController.js";
import homeController from "./controllers/homeController.js";


const routes = Router();

routes.use('/api/', homeController);
routes.use('/api/user', userController);

export default routes;