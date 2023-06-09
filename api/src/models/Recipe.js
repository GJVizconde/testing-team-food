const { DataTypes, Sequelize } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
	// defino el modelo
	sequelize.define(
		'recipe',
		{
			id: {
				type: DataTypes.UUID,
				allowNull: false,
				primaryKey: true,
				defaultValue: Sequelize.UUIDV4,
			},
			name: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			image: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			summary: {
				type: DataTypes.TEXT,
				allowNull: false,
			},
			healthScore: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			steps: {
				type: DataTypes.ARRAY(DataTypes.STRING(1000)),
				allowNull: false,
			},
			createdInDB: {
				type: DataTypes.BOOLEAN,
				defaultValue: true,
				allowNull: false,
			},
		},
		{ timestamps: false }
	);
};
