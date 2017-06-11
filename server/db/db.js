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

  //Character schema
  module.exports.Characters = schema.define('characters', {
    char_id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true, unique: true},
    char_name: {type: Sequelize.STRING},
    user: {type: Sequelize.INTEGER}, //Foreign-Key
    currency_sys: {type: Sequelize.INTEGER}, //Foreign-Key
    game: {type: Sequelize.INTEGER} //Foreign-Key
  });

  //Games schema
  module.exports.Games = schema.define('games', {
    game_id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true, unique: true},
    game_name: {type: Sequelize.STRING},
    user: {type: Sequelize.INTEGER}, //Foreign-Key
    strict_mode: {type: Sequelize.BOOLEAN, defaultValue: false}, //Foreign-Key
    currency_sys: {type: Sequelize.INTEGER} //Foreign-Key
  });

  return schema.sync({force: force});
};