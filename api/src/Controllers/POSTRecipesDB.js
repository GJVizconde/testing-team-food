const { Recipe } = require('../db');
const PostNewReceta = async (name, image, healthScore, summary, steps) => {
	try {
		// Esperando Modelos Para Enviar el Objeto
		const NewReceta = await Recipe.create({
			name,
			image,
			healthScore,
			summary,
			steps,
		});

		return NewReceta;
	} catch (error) {
		throw new Error({ error: error.message });
	}
};

module.exports = { PostNewReceta };
