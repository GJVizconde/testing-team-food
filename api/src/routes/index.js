const { Router } = require("express")

const recipesRoutes = require("./Recipes");
const DietsRoutes = require("./Diests");

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


router.use("/recipes", recipesRoutes);

router.use("/diets", DietsRoutes)




module.exports = router;
