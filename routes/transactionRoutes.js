const express = require('express');
const router = express.Router();
const {checkToken} = require('../auth/tokenValidation.js')
const transactionController = require('../controller/transactionController.js');

router.post('/add', transactionController.addTransaction);
router.get('/all/:user_id', checkToken, transactionController.getAllTransactions);
router.delete('/:id',checkToken, transactionController.deleteTransaction);

module.exports = router;
