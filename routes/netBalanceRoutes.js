const netBalanceController = require('../controller/netBalanceController.js')
const {checkToken} = require('../auth/tokenValidation.js')
const router = require('express').Router()
router.get('/:id', netBalanceController.getNetBalance)
router.put('/:id',netBalanceController.updateNetBalance)

module.exports = router