// const {Recipes} = require('../db');
// const axios = require('axios');
const {allRecipes} = require('../controllers/allRecipes')
const recipesByName= async(name)=>{
const apiFilter =  allRecipes.filter((recipes)=> recipes.name.toLowerCase().includes(name.toLowerCase()))
if(apiFilter.length>0) return apiFilter;
}

module.exports=recipesByName