const Sequelize = require('Sequelize');

//Connect with Server//
const schema = new Sequelize('magecase_db', 'root', 'password', {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

//Create Tables//
module.exports.syncTables = (force, schema) => {
  module.exports.schema = schema;

  //User Data schema
  module.exports.Users = schema.define('users', {
    user_id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true, unique: true},
    user_name: {type: Sequelize.STRING},
    user_email: {type: Sequelize.STRING},
    password: {type: Sequelize.STRING},
    premium_status: {type: Sequelize.BOOLEAN, defaultValue: false},
    user_icon: {type: Sequelize.STRING},
    char_count: {type: Sequelize.INTEGER, defaultValue: 0},
    game_count: {type: Sequelize.INTEGER, defaultValue: 0}
  });

  return schema.sync({force: force});
};