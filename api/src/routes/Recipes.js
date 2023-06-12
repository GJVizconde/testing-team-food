const { Router } = require ("express");
const { getRecipes, getByIdDB } = require ("../handlers/Recipes")
const {getById} = require("../handlers/Recipes");
const {PostReceta} = require("../handlers/Recipes");



const recipesRoutes = Router();

recipesRoutes.get("/", getRecipes);

recipesRoutes.get("/:id",getById);

recipesRoutes.get("/db/:id",getByIdDB);


recipesRoutes.post("/post", PostReceta);








module.exports = recipesRoutes;