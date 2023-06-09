require('dotenv').config();
const axios = require('axios');
const { API_KEYS } = process.env;
const URL_API = 'https://api.spoonacular.com/recipes/complexSearch';
const API_KEY = API_KEYS;

const getRecipesById = async (req,res) => {
  const id = req.params.id;
	const data = await axios.get(
		`${URL_API}?apiKey=${API_KEY}&addRecipeInformation=true`
	);
	
	
	try {
		const datos = await data.data.results.map((recipe) => {
			return {
				id: recipe.id,
				name: recipe.title,
				image: recipe.image,
				healthScore: recipe.healthScore,
				summary: recipe.summary,
				steps: recipe.analyzedInstructions[0]?.steps.map((st) => {
					return { number: st.number, step: st.step };
				}),
			};

		});
    const receta = datos.map((Receta_id) => {
			if (Receta_id.id === Number(id)) {
			return {
					id: Receta_id.id,
					name: Receta_id.name,
					image: Receta_id.image,
					healthScore: Receta_id.healthScore,
					summary: Receta_id.summary,
					steps: Receta_id.steps,
				};
       
			}
    
      
		});
 
		
		return res.status(200).json(receta[0]);
	} catch (error) {
		return res.status(404).json({ message: error });
	}
};

module.exports = {
	getRecipesById,
};
