const { Recipe } = require('../db');
const GetbyIdDB = async (id) => {
	

	try {
		const RecipeDB = await Recipe.findByPk(id);
		const recipe = {
			id: RecipeDB.id,
			name: RecipeDB.name,
			image: RecipeDB.image,
			summary: RecipeDB.summary,
			healthScore: RecipeDB.healthScore,
			steps: RecipeDB.steps,
		};
		return recipe
	} catch (error) {
    throw new Error ( {error:error.message})
	}
};
module.exports = {GetbyIdDB};
