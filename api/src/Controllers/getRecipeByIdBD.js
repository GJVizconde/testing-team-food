const { Recipe } = require('../db');
const GetbyIdDB = async (req, res) => {
	const id = req.params.id;

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
		return res.status(200).json(recipe);
	} catch (error) {
		return res.status(404).json(error);
	}
};
module.exports = GetbyIdDB;
