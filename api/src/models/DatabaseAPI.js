const { DataTypes, UUIDV4 } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("databaseapi", {
    id: {
      type:DataTypes.INTEGER,
      allowNull:false,
      unique:true,
      primaryKey: true,
      
    },
    name: {
      type: DataTypes.STRING(1000),
      allowNull: false,
    },
    image:{
      type:DataTypes.STRING(1000),
    },
    dishTypes:{
      type:DataTypes.ARRAY(DataTypes.STRING(1000)),
      allowNull: false,

    },
    types:{
      type:DataTypes.STRING(1000),
      allowNull: false,
    },
    healthScore:{
      type:DataTypes.INTEGER,
      allowNull: false,
      
    },
    summary:{
      type:DataTypes.TEXT(1000),
      allowNull: false,
    },
    steps:{
      type:DataTypes.ARRAY(DataTypes.STRING(1000)),
      allowNull: false,
    },
    createdInDb: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  });
};
