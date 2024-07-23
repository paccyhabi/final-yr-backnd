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
<<<<<<< HEAD
      type: DataTypes.ENUM('income', 'expense','saving'),
=======
      type: DataTypes.ENUM('income', 'expense','savings'),
>>>>>>> f14f2674a20952b30ba9c56d4bce40897727f0dc
      allowNull: false
    },
    category: {
      type: DataTypes.STRING,
      allowNull: true
<<<<<<< HEAD
    }
=======
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
>>>>>>> f14f2674a20952b30ba9c56d4bce40897727f0dc
  });

  return Transaction;
};
