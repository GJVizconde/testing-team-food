const { Recipes, Diets } = require('../db');
const { API_KEY } = process.env;
const axios = require('axios');
const { infoBody } = require('../controllers/helpers/infoBody');

const allRecipes = async () => {
	const apiInfo = (
		await axios.get(
			`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true`
		)
	).data;

	const realInfo = apiInfo.results;
	const mappingApiInfo = infoBody(realInfo);

	// La parte de la BD

	const bdRecipes = await Recipes.getAll({ include: { model: Diets } });

	if (mappingApiInfo.length > 0 || bdRecipes.length > 0)
		return [...bdRecipes, ...mappingApiInfo];
};

module.exports = allRecipes;
