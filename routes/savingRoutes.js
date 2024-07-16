const express = require('express');
const router = express.Router();
const {checkToken} = require('../auth/tokenValidation.js')
const savingController = require('../controller/savingController.js');

router.get('/saving/:id',savingController.getSavings );


module.exports = router;
