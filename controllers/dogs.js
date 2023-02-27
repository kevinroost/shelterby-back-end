const { Dog, Profile } = require('../models')
const cloudinary = require('cloudinary').v2

async function createDog(req, res) {
  try {
    req.body.ownerId = req.user.profile.id
    console.log(req.user);
    const dog = await Dog.create(req.body)
    res.status(200).json(dog)
  } catch (error) {
    console.log(error);
    res.status(500).json(error)
  }
}

async function editDog (req, res) {
  try {
    const dog = await Dog.findByPk(req.params.id)
    dog.set(req.body)
    dog.save()
    res.status(200).json(dog)
  } catch (error) {
    console.log(error);
    res.status(500).json(error)
  }
}

async function indexDogs(req, res) {
  try {
    const dogs = await Dog.findAll(
      {
        include: [
          {
            model: Profile,
            as: "futureFamilies",
            through: {
              attributes: []
            }
          }
        ]
      }
    )
    console.log(dogs);
    res.status(200).json(dogs)
  } catch (error) {
    console.log(error);
    res.status(500).json(error)
  }
}

// async function indexListedDogs(req, req) {

// }

async function addPhoto(req, res) {
  try {
    const imageFile = req.files.photo.path
    const dog = await Dog.findByPk(req.params.id)
    const image = await cloudinary.uploader.upload(
      imageFile, 
      { tags: `${req.user.email}` }
    )
    dog.photo = image.url
    await dog.save()
    console.log(dog);
    res.status(201).json(dog.photo)
  } catch (error) {
    console.log(error)
    res.status(500).json({ err: error })
  }
}

async function deleteDog(req, res) {
  try {
    const rowsRemoved = await Dog.destroy({
      where: { id: req.params.id}
    })
    res.status(200).json(rowsRemoved)
  } catch (error) {
    console.log(error);
    res.status(500).json(error)
  }
}


module.exports = {
  createDog,
  addPhoto,
  editDog,
  delete: deleteDog,
  indexDogs
}