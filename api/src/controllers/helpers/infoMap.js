const infoMap = (arr) => {
	const arrMapping = arr.map((food) => {
		return {
			id: food.id,
			name: food.title,
			image: food.image,
			summary: food.summary,
			healthScore: food.healthScore,
			steps: food.analyzedInstructions[0]?.steps?.map((step)=> step.step),
			diets: food.diets? food.diets: '',
		};
	});
	return arrMapping;
};
module.exports = infoMap;
