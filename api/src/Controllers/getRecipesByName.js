const axios = require('axios');
const infoMap = require('../helpers/infoMap');
const { Recipe } = require('../db');
const { Op } = require('sequelize');
const getRecipesByName = async (name) => {
	// Para la API
	const info1 = (
		await axios.get(
			`https://api.spoonacular.com/recipes/complexSearch?apiKey=a0a39c9ff6c6417bafb3c4167d95038b&addRecipeInformation=true`
		)
	).data;
	const infoResults = info1.results;

	const mapping = infoMap(infoResults);

	const apiNames = mapping.filter((recipes) =>
		recipes.name.toLowerCase().includes(name.toLowerCase())
	);

	// Para la BD
	const bdNames = await Recipe.findAll({
		where: {
			name: { [Op.iLike]: `%${name}%` },
		},
	});

	if(apiNames.length>0 || bdNames.length>0) return [...bdNames, ...apiNames]
};


module.exports = {getRecipesByName};
