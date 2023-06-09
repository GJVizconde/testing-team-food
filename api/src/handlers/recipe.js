const {Router} = require('express');
const getAllRecipes = require('../controllers/getAllRecipes');
const getRecipesByName = require('../controllers/getRecipesByName');
const recipeRouter = Router();

recipeRouter.get('/', async(req, res)=>{
    const {name} = req.query;
    
    try{
const results = name? await getRecipesByName(name): await getAllRecipes();
res.status(200).json(results)
    }catch(err){
res.status(400).json({error: err.message})
    }
})

module.exports= recipeRouter;