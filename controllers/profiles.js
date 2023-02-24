const { Profile, Dog, FamilyDog } = require('../models')
const cloudinary = require('cloudinary').v2

async function index(req, res) {
  try {
    const profiles = await Profile.findAll(
      {
        include: [
          {
            model: Dog, 
            as: "listedDogs"
          },
          {
            model: Dog, 
            as: "futureDogs", 
            through: {
              // attributes: [],
            }
          }
        ]
      }
    )
    res.json(profiles)
  } catch (error) {
    console.log(error)
    res.status(500).json({ err: error })
  }
}

async function viewProfile(req, res) {
  try {
    const profile = await Profile.findByPk(req.params.id)
    res.status(200).json(profile)
  } catch (error) {
    console.log(error)
    res.status(500).json({ err: error })
  }
}

async function editProfile(req, res) {
  try {
    const profile = await Profile.findByPk(req.params.id)
    profile.set(req.body)
    profile.save()
    res.status(200).json(profile)
  } catch (error) {
    console.log(error)
    res.status(500).json({ err: error })
  }
}

async function addPhoto(req, res) {
  try {
    const imageFile = req.files.photo.path
    const profile = await Profile.findByPk(req.params.id)
    const image = await cloudinary.uploader.upload(
      imageFile, 
      { tags: `${req.user.email}` }
    )
    profile.photo = image.url
    await profile.save()
    res.status(201).json(profile.photo)
  } catch (error) {
    console.log(error)
    res.status(500).json({ err: error })
  }
}

async function associateDog(req, res) {
  try {
    const { profileId, dogId } = req.params
    const association = await FamilyDog.create({
      familyId: profileId, dogId: dogId
    })
    res.status(200).json(association)
  } catch (error) {
    console.log(error);
    res.status(500).json(error)
  }
}

async function deleteDogAssociation(req, res) {
  try {
    const rowsRemoved = await FamilyDog.destroy({
      where: { 
        id: req.params.futureDogId
      }
    })
    res.status(200).json(rowsRemoved)
  } catch (error) {
    console.log(error);
    res.status(500).json(error)
  }
}

module.exports = {
  index, 
  addPhoto,
  editProfile,
  associateDog,
  deleteDogAssociation,
  viewProfile
}
