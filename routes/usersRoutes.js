const userController = require('../controller/userController.js')
const {checkToken} = require('../auth/tokenValidation.js')
const router = require('express').Router()
router.post('/addUser', userController.addUser)
router.post('/login', userController.loginUser)
router.get('/transaction/:user_id', userController.getUserTransactions)


router.get('/:id',checkToken, userController.getOneUser)
router.put('/:id',checkToken, userController.updateUser)
router.delete('/:id',checkToken, userController.deleteUser)

module.exports = router