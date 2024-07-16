const express = require('express');
const router = express.Router();
const {checkToken} = require('../auth/tokenValidation.js')
const expenseController = require('../controller/expenseController.js');

router.get('/expense/:id',expenseController.getExpenses );


module.exports = router;
