
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('users', {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      phoneNumber: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
      }      

    });
    return User;
  };
  