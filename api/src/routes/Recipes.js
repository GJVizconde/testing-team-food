const { Router } = require ("express");
const { getRecipes } = require ("../handlers/Recipes")

const recipesRoutes = Router();

recipesRoutes.get("/", getRecipes);



module.exports = recipesRoutes;