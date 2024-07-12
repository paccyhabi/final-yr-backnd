const db = require('../models');
const Transaction = db.transactions;
// Add transaction
const addTransaction = async (req, res) => {
  try {
    const { description, amount, type, category,user_id } = req.body;
    // Get userId from authenticated user (e.g., from JWT token)
    // const userId = req.user.userId; // Assuming userId is stored in req.user

    await Transaction.create({
      description,
      amount,
      type,
      category,
      user_id
    });

    res.status(201).json({message: 'Data recorded successful'});
  } catch (error) {
    console.error('Error creating transaction:', error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Get all transactions for authenticated user
const getAllTransactions = async (req, res) => {
  try {
    const userId = req.params.user_id; // Get userId from authenticated user
    const transactions = await Transaction.findAll({ where: { user_id: userId } });
    res.status(200).json(transactions);
  } catch (error) {
    console.error('Error fetching transactions:', error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Delete transaction
const deleteTransaction = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.userId; // Get userId from authenticated user

    const deletedCount = await Transaction.destroy({ where: { id, UserId: userId } });
    if (deletedCount > 0) {
      res.status(200).json({ message: 'Transaction deleted' });
    } else {
      res.status(404).json({ message: 'Transaction not found' });
    }
  } catch (error) {
    console.error('Error deleting transaction:', error);
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = {
  addTransaction,
  getAllTransactions,
  deleteTransaction
}
