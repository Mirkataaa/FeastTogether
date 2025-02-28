import { Router } from "express";


const homeController = Router();

homeController.get('/' , (req,res) => {
    console.log('Hello');
    
    res.json({message: 'Welcome to Express/React resful service'});
});



export default homeController;

