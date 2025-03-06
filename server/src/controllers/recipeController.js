import {Router} from 'express';
import recipeService from '../services/recipeService.js';
import Recipe from '../models/Recipes.js';

const recipeController = Router();

// * Pagination + infinite scroll + category
recipeController.get('/:category' , async (req , res) => {
    try {
        const {category} = req.params;
        let {page = 1 , limit = 10} = req.query;
    
        page = parseInt(page);
        limit = parseInt(limit);

        const totalRecipes = await Recipe.countDocuments({category})
        
        const recipes = await Recipe.find({category})
            .skip((page - 1) * limit)
            .limit(limit)
            .sort({ createdAt: -1 });
        
        res.json({
            recipes,
            totalPages: Math.ceil(totalRecipes / limit),
            currentPage: page
        });
    }catch (error) {
        res.status(500).json({message: "Server error" , error});
    }
});

// ! Fetch all products - Check if needed
recipeController.get('/all' , async (req,res) => {
    try {
        const recipes = await recipeService.getAllRecipes();
        res.json(recipes);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});

// * Recipe by ID
recipeController.get('/:category/:id' , async (req,res) => {
    const {id} = req.params;

    try {
        const recipe = recipeService.getAllRecipes(id);
        res.status(200).json(recipe)  
    } catch (error) {
        res.status(404).json({error: error.message});
    }
});

// * Create recipe
recipeController.post('/' , async (req,res) => {
    try {
        const newRecipe = await recipeService.createRecipe(req.body);
        res.status(200).json(newRecipe)
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});

// * Update recipe
recipeController.put('/:id' , async (req,res) => {
    const {id} = req.params;
    const recipeData = req.body;

    try {
        const updatedRecie = await recipeService.updateRecipe(id , recipeData)
        res.status(200).json(updatedRecie);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});

// * Delete recipe
recipeController.delete('/:id' , async (req,res) => {
    const {id} = req.params;

    try {
        const deletedRecipe = recipeService.deleteRecipe(id);
        res.status(200).json(deletedRecipe);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});

export default recipeController;

