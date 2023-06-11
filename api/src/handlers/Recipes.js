const { getAllRecipes } = require("../controllers/getAllRecipes")
const { getRecipesByName } = require("../controllers/getRecipesByName")
const {getRecipesById} = require("../Controllers/getRecipesById")

const getRecipes = async (req, res) => {
  const { name } = req.query;

  try {
    const result = name ? await getRecipesByName(name) : await getAllRecipes();
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// handler GETByID>

const getById =  async (req,res)  => {

  const {id} =  req.params
  console.log(id)

  try {
    const result = await getRecipesById(id)

    res.status(200).json(result)

  }catch (error){
    res.status(400).json({error:error.message})

  }


}




module.exports = {
    getRecipes,
    getById,
  };