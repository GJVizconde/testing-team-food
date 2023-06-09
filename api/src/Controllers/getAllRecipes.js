require('dotenv').config();
const axios = require('axios');
const { API_KEYS } = process.env;
const URL_API = 'https://api.spoonacular.com/recipes/complexSearch';
const API_KEY = API_KEYS;
const getAllRecipes = async () => {
	const data = await axios.get(
		`${URL_API}?apiKey=${API_KEY}&addRecipeInformation=true`
	);
	try {
		const datos = data.data.results.map((recipe) => {
			return {
				id: recipe.id,
				name: recipe.title,
				image: recipe.image,
				dishTypes: recipe.dishTypes,
				types: recipe.diets.map((diet) => diet).join(', '),
				healthScore: recipe.healthScore,
				summary: recipe.summary,
				score: recipe.score,
				steps: recipe.analyzedInstructions[0]?.steps.map((st) => {
					return { number: st.number, step: st.step };
				}),
        
       
			};
     

		});
		return res.status(200).json(datos);
	} catch (error) {
		return res.status(404 ).json({ message: error.message });
	}
};

module.exports = {
	getAllRecipes,
};
