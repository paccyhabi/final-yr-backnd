// transactionModel.js
module.exports = (sequelize, DataTypes) => {
  const Transaction = sequelize.define('transactions', {
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    amount: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    },
    type: {
      type: DataTypes.ENUM('income', 'expense','savings'),
      allowNull: false
    },
    category: {
      type: DataTypes.STRING,
      allowNull: true
    },
    netBalance: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0,
    }, 
    savings: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },         
  });

  return Transaction;
};
