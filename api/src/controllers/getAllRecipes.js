const { Recipe, Diet } = require('../db');
const { API_KEY } = process.env;
const axios = require('axios');
const infoMap = require('../controllers/helpers/infoMap');

const getAllRecipes = async () => {
	const apiInfo = (
		await axios.get(
			`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true`
		)
	).data;

	const realInfo = apiInfo.results;
	const mappingApiInfo = infoMap(realInfo);

	// La parte de la BD

	const bdRecipes = await Recipe.findAll({ include: { model: Diet } });

	if (mappingApiInfo.length > 0 || bdRecipes.length > 0)
		return [...bdRecipes, ...mappingApiInfo];
	else return 'theres nothing in the database, its strange';
};

module.exports = getAllRecipes;
