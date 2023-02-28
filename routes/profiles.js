const router = require('express').Router()
const profilesCtrl = require('../controllers/profiles.js')
const middleware = require('../middleware/auth.js')

const { decodeUserFromToken, checkAuth } = middleware

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.get('/', checkAuth, profilesCtrl.index)
router.get('/:id', checkAuth, profilesCtrl.viewProfile)
router.post('/:profileId/futureDogs/:dogId', profilesCtrl.associateDog)
router.patch('/:id', checkAuth, profilesCtrl.editProfile)
router.put('/:id/add-photo', checkAuth, profilesCtrl.addPhoto)
router.delete('/:profileId/futureDogs/:dogId', checkAuth, profilesCtrl.deleteDogAssociation)

module.exports = router
