const { Sequelize, DataTypes } = require('sequelize');
const dbconfig = require('../config/dbconfig')
const sequelize = new Sequelize(
    dbconfig.DB,
    dbconfig.USER,
    dbconfig.PASSWORD, {
        host: dbconfig.HOST,
        dialect: dbconfig.dialect,
        dialectOptions: {
            ssl: false
        }
    }
);


sequelize.authenticate()
.then(() => {
    // Connection successful.
})
.catch(err => {
    // Log the error if the connection fails.
});
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.users = require('./userModel.js')(sequelize, DataTypes);
db.transactions = require('./transactionModel.js')(sequelize, DataTypes);

// Synchronize your models with the database
db.sequelize.sync({ force: false })
.then(() => {
    // Console log or handle the result as needed.
});

//
db.users.hasMany(db.transactions, {
    foreignKey: 'user_id',
    as: 'transaction'
})

db.transactions.belongsTo(db.users, {
    foreignKey: 'user_id',
    as: 'user'
})


module.exports = db;
