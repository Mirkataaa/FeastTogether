import { Router } from "express";
import userController from "./controllers/userController.js";
import homeController from "./controllers/homeController.js";


const routes = Router();

routes.use('/api/', homeController);
routes.use('/api/user', userController);


routes.all('*' , (req,res) => {
    res.status(404).json({message: '404 - Page not found'});
});


export default routes;