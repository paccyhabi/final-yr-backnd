const userController = require('../controller/userController.js')
const {checkToken} = require('../auth/tokenValidation.js')
const { authorizeUser } = require('../auth/authenticate.js');

const router = require('express').Router()
router.post('/signup', userController.addUser)
router.post('/login', userController.loginUser)


router.get('/:id',checkToken,authorizeUser, userController.getOneUser)
router.put('/:id',checkToken,authorizeUser, userController.updateUser)
router.delete('/:id',checkToken,authorizeUser, userController.deleteUser)

module.exports = router