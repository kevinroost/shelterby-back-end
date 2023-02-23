const { Dog } = require('../models')

async function createDog(req, res) {
  try {
    req.body.ownerId = req.user.profile.id
    const dog = await Dog.create(req.body)
    res.status(200).json(dog)
  } catch (error) {
    console.log(error);
    res.status(500).json(error)
  }
}



module.exports = {
  createDog,
}