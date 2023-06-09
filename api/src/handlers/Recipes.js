const { getAllRecipes} = require("../Controllers/getAllRecipes")
const { getRecipesByName} = require("../Controllers/getRecipesByName")

const getRecipes = async (req, res) => {
  const { name } = req.query;

  try {
    const result = name ? await getRecipesByName(name) : await getAllRecipes();
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
    getRecipes,
  };