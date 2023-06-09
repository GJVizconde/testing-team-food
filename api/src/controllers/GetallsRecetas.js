const axios = require('axios');
const { API_KEYS } = process.env;
const URL_API = 'https://api.spoonacular.com/recipes/complexSearch';
const API_KEY = API_KEYS;
const {Databaseapi} = require('../db');

const GetallsRecetas = async (req,res) => {
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
    for(let i = 0;i<datos.length; i++) {
    const Newrecet = Databaseapi.create({
      id:datos[i].id,
      name: datos[i].name,
      image: datos[i].image,
      dishTypes: datos[i].dishTypes,
      types: datos[i].types,
      healthScore: datos[i].healthScore,
      summary: datos[i].summary,
      steps: datos[i].steps,

    })
  }
  
    
      
		
   
    return res.status(200).json(datos);
  } catch (error) {
    return res.status(404 ).json({ message: error.message });
    
  }

}
module.exports = GetallsRecetas