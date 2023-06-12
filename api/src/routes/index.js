const { Router } = require("express")

const recipesRoutes = require("./Recipes")

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


router.use("/recipes", recipesRoutes);




module.exports = router;
