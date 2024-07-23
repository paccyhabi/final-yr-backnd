const db = require('../models');

<<<<<<< HEAD
// Function to handle income transaction
const handleIncome = async (userId, amount) => {
  let netBalance = await db.netBalances.findOne({ where: { userId } });
  if (!netBalance) {
      netBalance = await db.netBalances.create({ balance: amount, userId });
  } else {
      netBalance.balance += parseFloat(amount);
      await netBalance.save();
  }
};

// Function to handle expense transaction
const handleExpense = async (userId, amount) => {
  let netBalance = await db.netBalances.findOne({ where: { userId } });
  if (!netBalance) {
      return false;
  } else {
      netBalance.balance -= parseFloat(amount);
      await netBalance.save();
  }
};

// Function to handle saving transaction
const handleSaving = async (userId, amount) => {
  let netBalance = await db.netBalances.findOne({ where: { userId } });
  if (netBalance) {
      netBalance.balance -= parseFloat(amount);
      await netBalance.save();

      let saving = await db.savings.findOne({ where: { userId } });
      if (!saving) {
          saving = await db.savings.create({ amount, userId });
      } else {
          saving.amount += parseFloat(amount);
          await saving.save();
      }
  }
};

// Create a new transaction
const createTransaction = async (req, res) => {
  const { description, amount, type, category, userId } = req.body;
  try {
      let netBalance = await db.netBalances.findOne({ where: { userId } });

      // Handle transaction based on type
      if (type === 'income') {
          const transaction = await db.transactions.create({
              description,
              amount,
              type,
              category,
              userId
          });
          await handleIncome(userId, amount);
          res.status(201).json({ message: 'Transaction added successfully', transaction });

      } else if (type === 'expense') {
          if (!netBalance) {
              res.status(200).json({ message: "Add income first" });
          } else if (netBalance.balance < parseFloat(amount)) {
              res.status(200).json({ message: "Insufficient Balance" });
          } else {
              const transaction = await db.transactions.create({
                  description,
                  amount,
                  type,
                  category,
                  userId
              });
              await handleExpense(userId, amount);
              res.status(201).json({ message: 'Transaction added successfully', transaction });
          }

      } else if (type === 'saving') {
          if (!netBalance) {
              res.status(200).json({ message: "Add income first" });
          } else if (netBalance.balance < parseFloat(amount)) {
              res.status(200).json({ message: "Insufficient Balance" });
          } else {
              const transaction = await db.transactions.create({
                  description,
                  amount,
                  type,
                  category,
                  userId
              });
              await handleSaving(userId, amount);
              res.status(201).json({ message: 'Transaction added successfully', transaction });
          }
      }

  } catch (error) {
      res.status(500).json({ message: 'Error adding transaction', error });
  }
};


  // Retrieve transactions for a user
const getUserTransactions = async (req, res) => {
    let userId = req.params.id;
    try {
      if (!userId) {
        return res.status(400).json({ message: 'User ID is required' });
      }
      const transactions = await db.transactions.findAll({ where: { userId } });
      res.status(200).json(transactions);
    } catch (error) {
      console.error('Error retrieving transactions:', error);
      res.status(500).json({ message: 'Error retrieving transactions', error: error.message || error });
    }
  };

// Delete a transaction
const deleteTransaction = async (req, res) => {
    try {
        let userId = req.params.id;      
        const deletedCount = await db.transactions.destroy({ where: { userId} });
        if (deletedCount > 0) {
            res.status(200).send('Transaction is deleted');
        } else {
            res.status(404).send('Transaction not found');
        }
    } catch (error) {
        console.error('Error deleting transaction:', error);
        res.status(500).send('Error deleting transaction');
=======
// Create a new transaction
const createTransaction = async (req, res) => {
    const { description, amount, type, category,userId } = req.body;
    try {
        // Create transaction
        const transaction = await db.transactions.create({
            description,
            type,
            category,
            userId
        });

        // Update net balance
        let netBalance = await db.netBalances.findOne({ where: { userId } });

        if (!netBalance) {
            netBalance = await db.netBalances.create({ userId, amount: 0 });
        }

        if (type === 'income') {
            netBalance.amount += amount;
        } else if (type === 'expense') {
            netBalance.amount -= amount;
        }

        await netBalance.save();

        // Create saving record if applicable
        if (type === 'saving') {
            await db.savings.create({
                amount: amount,
                transactionId: transaction.id
            });
        }

        res.status(201).json({ message: 'Transaction added successfully', transaction });
    } catch (error) {
        res.status(500).json({ message: 'Error adding transaction', error });
    }
};

// Get all transactions for a user
const getTransactions = async (req, res) => {
    const userId = req.params.userId;
    try {
        const transactions = await db.transactions.findAll({
            where: { userId },
            include: [{ model: db.savings, as: 'savings' }]
        });
        res.status(200).json(transactions);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving transactions', error });
    }
};

// Update a transaction
const updateTransaction = async (req, res) => {
    const transactionId = req.params.id;
    const { description, amount, type, category } = req.body;

    try {
        await db.transactions.update({ description, amount, type, category }, { where: { id: transactionId } });
        res.status(200).json({ message: 'Transaction updated successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error updating transaction', error });
    }
};

// Delete a transaction
const deleteTransaction = async (req, res) => {
    const transactionId = req.params.id;

    try {
        await db.transactions.destroy({ where: { id: transactionId } });
        res.status(200).json({ message: 'Transaction deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting transaction', error });
>>>>>>> f14f2674a20952b30ba9c56d4bce40897727f0dc
    }
};


module.exports = {
    createTransaction,
<<<<<<< HEAD
    deleteTransaction,
    getUserTransactions
=======
    getTransactions,
    updateTransaction,
    deleteTransaction
>>>>>>> f14f2674a20952b30ba9c56d4bce40897727f0dc
};
