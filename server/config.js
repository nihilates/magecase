//General Configuration//
const Sequelize = require('Sequelize');

//Server Configuration
module.exports.port = 8080;

//Database Configuration
module.exports.database = new Sequelize('magecase_db', 'root', 'password', {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});