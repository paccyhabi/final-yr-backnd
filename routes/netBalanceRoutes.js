const express = require('express');
const router = express.Router();
const {checkToken} = require('../auth/tokenValidation.js')
const netBalanceController = require('../controller/netBalanceController.js');

router.get('/balance/:id',netBalanceController.getNetBalance );


module.exports = router;
