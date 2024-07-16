const express = require('express');
const router = express.Router();
const {checkToken} = require('../auth/tokenValidation.js')
const transactionController = require('../controller/transactionController.js');

router.post('/add', transactionController.createTransaction);
router.get('/transactions/:id', transactionController.getTransactions);
router.get('/user/:id', transactionController.getUserTransactions);
router.delete('/transactions/:id', transactionController.deleteTransaction);


module.exports = router;
