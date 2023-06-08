const { Router } = require("express");
const recipesHandler = require('../handler/recipesHandler')
const dietsHandler = require('../handler/dietsHandler')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
 router.use('/recipes', recipesHandler);
 router.use('/diets', dietsHandler)
module.exports = router;
