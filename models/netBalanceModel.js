module.exports = (sequelize, DataTypes) => {
  const NetBalance = sequelize.define('netBalances', {
    amount: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0,
    },
  });

  return NetBalance;
};
