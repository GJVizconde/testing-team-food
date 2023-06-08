const infoBody= (arr)=>{
    const arrMapping= arr.map((food)=>{
        return {
            id: food.id,
name: food.title,
image: food.image,
dishResume: food.summary,
health_score: food.healthScore,
steps: food.steps?.map((step)=> step.step)
        }
    })
    return arrMapping;
}

module.exports = infoBody;