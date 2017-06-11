const db = require('./db.js');
const Sequelize = require('sequelize');
const defaults = require('./defaultData.js');

const schema = new Sequelize('magecase_db', 'root', 'password', {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

db.syncTables(true, schema).then(() => {
  defaults.seedData(db)
});