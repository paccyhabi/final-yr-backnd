const db = require('../models');

// Create a new saving
const createSaving = async (req, res) => {
    const { amount, transactionId } = req.body;
    const userId = req.user.userId;

    try {
        const saving = await db.savings.create({
            amount,
            transactionId,
            userId
        });

        res.status(201).json({ message: 'Saving added successfully', saving });
    } catch (error) {
        res.status(500).json({ message: 'Error adding saving', error });
    }
};

// Get all savings for a user
const getSavings = async (req, res) => {
    const userId = req.user.userId;

    try {
        const savings = await db.savings.findAll({ where: { userId } });
        res.status(200).json(savings);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving savings', error });
    }
};

// Update a saving
const updateSaving = async (req, res) => {
    const savingId = req.params.id;
    const { amount } = req.body;

    try {
        await db.savings.update({ amount }, { where: { id: savingId } });
        res.status(200).json({ message: 'Saving updated successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error updating saving', error });
    }
};

// Delete a saving
const deleteSaving = async (req, res) => {
    const savingId = req.params.id;

    try {
        await db.savings.destroy({ where: { id: savingId } });
        res.status(200).json({ message: 'Saving deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting saving', error });
    }
};

module.exports = {
    createSaving,
    getSavings,
    updateSaving,
    deleteSaving
};
