//General Configuration//
const Sequelize = require('sequelize');

//Server Configuration
module.exports.port = 8080;

//Database Configuration
module.exports.database = new Sequelize('magecase_db', 'root', 'rolld8', {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});