const express = require('express');
const router = express.Router();
const {checkToken} = require('../auth/tokenValidation.js')
const incomeController = require('../controller/incomeController.js');

router.get('/income/:id',incomeController.getIncome );


module.exports = router;
