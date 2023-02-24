const router = require('express').Router()
const dogsCtrl = require('../controllers/dogs.js')
const middleware = require('../middleware/auth.js')

const { decodeUserFromToken, checkAuth } = middleware

/*---------- Public Routes ----------*/
router.get('/', dogsCtrl.indexDogs)


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.post('/', checkAuth, dogsCtrl.createDog)
router.patch('/:id', checkAuth, dogsCtrl.editDog)
router.put('/:id/add-photo', checkAuth, dogsCtrl.addPhoto)
router.delete('/:id', checkAuth, dogsCtrl.delete)

module.exports = router
