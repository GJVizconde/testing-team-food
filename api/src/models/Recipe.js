const { DataTypes, UUIDV4 } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("recipe", {
    ID: {type: DataTypes.UUID,
      primaryKey: true,
    defaultValue: UUIDV4},
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image:{
      type: DataTypes.STRING,
      allowNull: false
    },
dishResume:{
  type: DataTypes.STRING,
  allowNull:false
},
health_score:{
  type: DataTypes.INTEGER
},
steps:{
  type: DataTypes.STRING
}
  },
  {timestamps: false});
};
