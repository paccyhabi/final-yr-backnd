module.exports = (sequelize, DataTypes) => {
  const NetBalance = sequelize.define('netBalances', {
<<<<<<< HEAD
    balance: {
=======
    amount: {
>>>>>>> f14f2674a20952b30ba9c56d4bce40897727f0dc
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0,
    },
  });

  return NetBalance;
};
