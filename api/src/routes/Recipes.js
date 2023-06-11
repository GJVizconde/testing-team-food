const { Router } = require ("express");
const { getRecipes } = require ("../handlers/Recipes")
const {getById} = require("../handlers/Recipes")

const recipesRoutes = Router();

recipesRoutes.get("/", getRecipes);

recipesRoutes.get("/:id",getById);







module.exports = recipesRoutes;