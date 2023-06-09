const { DataTypes, UUIDV4 } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("recipe", {
    id: {
      type:DataTypes.UUID,
      allowNull:false,
      unique:true,
      primaryKey: true,
      defaultValue: UUIDV4
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image:{
      type:DataTypes.STRING,
    },
    dishTypes:{
      type:DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,

    },
    types:{
      type:DataTypes.STRING,
      allowNull: false,
    },
    healthScore:{
      type:DataTypes.INTEGER,
      allowNull: false,
    },
    summary:{
      type:DataTypes.TEXT,
      allowNull: false,
    },
    steps:{
      type:DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
    createdInDb: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  });
};
