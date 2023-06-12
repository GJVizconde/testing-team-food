require('dotenv').config();
const axios = require('axios');
const {API_KEY } = process.env
const URL_API = 'https://api.spoonacular.com/recipes/complexSearch'

const  {Diet} = require('../db')
const GETdiets = async () => {
  console.log(API_KEY)


  try {
    const data = await axios.get(`${URL_API}?apiKey=${API_KEY}&addRecipeInformation=true`)
    console.log(data)

    const types = await data.data.results.map(type => type.diets);
  
    const dietas = types.flat();

    for (let i = 0; i<dietas.length; i++) {
      const typo = await Diet.create({
        name:dietas[i],
      });
    }
    return dietas

  
    
  } catch (error) {
    throw new Error ( {error:error.message})
    
    
  }
 
}

module.exports = {GETdiets}
