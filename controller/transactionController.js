const db = require('../models');

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
    }
};

module.exports = {
    createTransaction,
    getTransactions,
    updateTransaction,
    deleteTransaction
};
