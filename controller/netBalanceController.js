const db = require('../models');

// Get the net balance for a user
const getNetBalance = async (req, res) => {
<<<<<<< HEAD
 let userId = req.params.id;
  try {
    const netBalance = await db.netBalances.findOne({ where: { userId } });
    if (!netBalance) {
      return res.status(404).json({ message: 'Net balance not found' });
    }
    res.status(200).json(netBalance);
  } catch (error) {
    console.error('Error retrieving net balance:', error);
    res.status(500).json({ message: 'Error retrieving net balance', error: error.message || error });
  }
};


module.exports = {
  getNetBalance
=======
    const userId = req.params.userId;

    try {
        const netBalance = await db.netBalances.findOne({ where: { userId } });
        res.status(200).json(netBalance);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving net balance', error });
    }
};

// Update the net balance for a user
const updateNetBalance = async (req, res) => {
    const userId = req.params.userId;
    const { balance } = req.body;

    try {
        await db.netBalances.update({ balance }, { where: { userId } });
        res.status(200).json({ message: 'Net balance updated successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error updating net balance', error });
    }
};

module.exports = {
    getNetBalance,
    updateNetBalance
>>>>>>> f14f2674a20952b30ba9c56d4bce40897727f0dc
};
