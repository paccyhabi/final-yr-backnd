const express = require('express');
const router = express.Router();
const {checkToken} = require('../auth/tokenValidation.js')
const transactionController = require('../controller/transactionController.js');

router.post('/add', transactionController.createTransaction);
router.get('/:id', transactionController.getTransactions);
router.delete('/:id', transactionController.deleteTransaction);
router.put('/:id', transactionController.updateTransaction);

module.exports = router;
