const { getAllRecipes } = require("../controllers/getAllRecipes")
const { getRecipesByName } = require("../controllers/getRecipesByName")
const {getRecipesById} = require("../controllers/getRecipesById");
const {GetbyIdDB} = require("../controllers/getRecipesByIdDB");
const {PostNewReceta} = require("../controllers/POSTRecipesDB");
const {GETdiets} = require("../controllers/getDiets");

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
 
  try {
    const result = await getRecipesById(id)

    res.status(200).json(result)

  }catch (error){
    res.status(400).json({error:error.message})

  }


}

// handler GETByIdDB>

const getByIdDB = async (request,res) => {
  const {id} =  req.params
  try {
    const result = await GetbyIdDB(id)

    res.status(200).json(result)
    
  } catch (error) {
    res.status(400).json({error:error});
    
  }

}

// handler POST by DB>

const PostReceta = async (req,res) => {
  const { name, image, healthScore, summary, steps } =
		req.body;
    
  
  try {
    const result = await  PostNewReceta(name, image, healthScore, summary, steps)

    res.status(200).json(result)
  } catch (error) {
    res.status(400).json({error:error});
    
  }
}








module.exports = {
    getRecipes,
    getById,
    getByIdDB,
    PostReceta,
  };