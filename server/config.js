//General Configuration//
const priv = require('./private.js'); //sensitive data
const Sequelize = require('sequelize');

//Server Configuration
module.exports.port = 8080;

//Database Configuration
module.exports.database = new Sequelize(priv.nom, priv.loc, priv.pwd, {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});