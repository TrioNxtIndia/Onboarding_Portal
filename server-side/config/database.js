const Sequelize = require('sequelize');

const sequelize = new Sequelize('customer', 'root', 'Pass@123', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;