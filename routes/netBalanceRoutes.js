<<<<<<< HEAD
const express = require('express');
const router = express.Router();
const {checkToken} = require('../auth/tokenValidation.js')
const netBalanceController = require('../controller/netBalanceController.js');

router.get('/balance/:id',netBalanceController.getNetBalance );


module.exports = router;
=======
const netBalanceController = require('../controller/netBalanceController.js')
const {checkToken} = require('../auth/tokenValidation.js')
const router = require('express').Router()
router.get('/:id', netBalanceController.getNetBalance)
router.put('/:id',netBalanceController.updateNetBalance)

module.exports = router
>>>>>>> f14f2674a20952b30ba9c56d4bce40897727f0dc
