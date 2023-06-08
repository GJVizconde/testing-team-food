const {allRecipes} = require('../controllers/allRecipes');

const recipeByID = async(id)=>{
    const recipeFiltId = allRecipes.filter((recipe)=> recipe.id === id)

    if(recipeFiltId.length >0) return recipeFiltId;
}

module.exports= recipeByID;