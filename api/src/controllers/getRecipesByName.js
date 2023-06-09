const getAllRecipes  = require('../controllers/getAllRecipes');
const getRecipesByName = async (name) => {
	const apiFilter = await getAllRecipes.filter((recipes) =>
		recipes.name.toLowerCase().includes(name.toLowerCase())
	);
	console.log(apiFilter);
	if (apiFilter.length > 0) return apiFilter;
};

module.exports = getRecipesByName;
