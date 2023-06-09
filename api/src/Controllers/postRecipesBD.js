const { Recipe } = require('../db');
const PostReceta = async (req, res) => {
	const { name, image, healthScore, summary, steps } =
		req.body;
	

	try {
		// Esperando Modelos Para Enviar el Objeto
		const NewReceta = await Recipe.create({
			name,
			image,
			healthScore,
			summary,
			steps,
		});

		res.send('New Recet Created!');
	} catch (error) {
		res.status(404).json(error);
	}
};

module.exports = PostReceta;
