const express = require('express');
const router = express.Router();
const {checkToken} = require('../auth/tokenValidation.js')
const transactionController = require('../controller/transactionController.js');

router.post('/add', transactionController.createTransaction);
<<<<<<< HEAD
router.get('/transactions/:id', transactionController.getUserTransactions);
router.delete('/transactions/:id', transactionController.deleteTransaction);

=======
router.get('/:id', transactionController.getTransactions);
router.delete('/:id', transactionController.deleteTransaction);
router.put('/:id', transactionController.updateTransaction);
>>>>>>> f14f2674a20952b30ba9c56d4bce40897727f0dc

module.exports = router;
