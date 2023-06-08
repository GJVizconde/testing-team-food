import recipeByID from '../controllers/recipeByID';

const {Router} = require('express');
const {allRecipes}= require('../controllers/allRecipes');
const {recipesByName}= require('../controllers/recipesByName');

const recipesRouter = Router();

recipesRouter.get("/", async(req, res)=>{
    const{name}= req.query;
    try{
const results= name? await recipesByName(name): await allRecipes();
res.status(200).json(results)
    }catch(err){
res.status(400).json({error: err.message})
    }
})
.get("/:id", async(req, res)=>{
    const {id}= req.params;
    try{
const results = await recipeByID(id);
res.status(200).json(results)
    }catch(err){
        res.status(400).json({error: err.message})
    }
})
.post("/", async(req, res)=>{})

export default recipesRouter;
