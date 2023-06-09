const { Router } = require("express");
const recipesRoutes = require("./Recipes");
const { getRecipesById } = require("../Controllers/getRecipesById");
const GetbyIdDB = require("../Controllers/getRecipeByIdBD");
const PostReceta = require("../Controllers/postRecipesBD");
const GETdiets = require("../Controllers/getDiets");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/recipes", recipesRoutes);

router.get('/recipess', (req, res) => {
	GetallsRecetas(req, res)
})

router.get('/recipess/:id', (req, res) => {
	const id = req.params.id

	if (typeof id === 'string' && id.length > 7) {
		GetbyIdDB(req,res)
	}
	getRecipesById(req, res);
});



router.post('/recipes/newreceta', (req,res) => {
	PostReceta(req, res);
});

router.get('/diets',(req, res) => {
  GETdiets(req,res)

})


module.exports = router;
