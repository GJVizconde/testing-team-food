//Aqui deberia estar la ruta Diests

const { Router } = require ("express");
const { getDIET } = require("../handlers/Diests");


const DietsRoutes = Router();


DietsRoutes.get("/", getDIET)



module.exports = DietsRoutes;