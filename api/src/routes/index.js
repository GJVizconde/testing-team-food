const { Router } = require("express");
const GETbyId = require('../controllers/GETbyId');
const GETdiets = require('../controllers/GETDiets');
const PostReceta = require('../controllers/POSTReceta');
const GetallsRecetas = require('../controllers/GetallsRecetas');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/recipes', (req, res) => {
	GetallsRecetas(req, res)
})

router.get('/recipes/:id', (req, res) => {
	const id = req.params.id

	if (typeof id === 'string' && id.length > 7) {
		console.log('La llamada sera a la Base de Datos');
	}
	GETbyId(req, res);
});



router.post('/recipes/newreceta', (req,res) => {
	PostReceta(req, res);
});

router.get('/diets',(req, res) => {
  GETdiets(req,res)

})

 

module.exports = router;
