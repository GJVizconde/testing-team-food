require('dotenv').config();
const axios = require('axios');
const {API_KEYS } = process.env
const URL_API = 'https://api.spoonacular.com/recipes/complexSearch'
const API_KEY = API_KEYS
const GETdiets = async (req,res) => {

  try {
    const data = await axios.get(`${URL_API}?apiKey=${API_KEY}&addRecipeInformation=true`)

    const types = await data.data.results.map(type => type.diets);
  
    const dietas = types.flat();

    return res.status(200).json(dietas);

  
    
  } catch (error) {
    return res.status(404).json({message: error.message});
    
  }
 
}

module.exports = GETdiets