import { Router } from "express";
import userController from "./controllers/userController.js";
import homeController from "./controllers/homeController.js";
import recipeController from "./controllers/recipeController.js";
import commentController from "./controllers/commentController.js";
import ratingController from "./controllers/ratingController.js";


const routes = Router();

routes.use('/api/', homeController);
routes.use('/api/user', userController);
routes.use('/api/recipes' , recipeController);
routes.use('/api/comments', commentController);
routes.use('/api/ratings' , ratingController);


routes.all('*' , (req,res) => {
    res.status(404).json({message: '404 - Page not found'});
});


export default routes;