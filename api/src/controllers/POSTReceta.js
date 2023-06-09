const { Recipe } = require('../db');
const PostReceta = async (req, res) => {
	const { name, image, dishTypes, types, healthScore, summary, steps } =
		req.body;
	console.log(name, image);

	try {
		// Esperando Modelos Para Enviar el Objeto
		const NewReceta = await Recipe.create({
			name,
			image,
			dishTypes,
			types,
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
