const { Dog } = require('../models')
const cloudinary = require('cloudinary').v2

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

async function addPhoto(req, res) {
  try {
    const imageFile = req.files.photo.path
    const dog = await Dog.findByPk(req.params.id)
    const image = await cloudinary.uploader.upload(
      imageFile, 
      { tags: `${req.user.email}` }
    )
    dog.photo = image.url
    await profile.save()
    res.status(201).json(dog.photo)
  } catch (error) {
    console.log(error)
    res.status(500).json({ err: error })
  }
}



module.exports = {
  createDog,
  addPhoto,
}