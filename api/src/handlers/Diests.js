

// handler GET DIET >

const { GETdiets } = require("../controllers/getDiets");

const getDIET = async (req,res ) => {
  try {
    const result = await GETdiets()
    console.log(result)

    return res.status(200).json(result)
    
  } catch (error) {
    res.status(400).json({error:error});
    
  }
}


module.exports = {getDIET}



