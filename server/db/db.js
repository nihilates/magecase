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

//Create Schemas for Tables//
module.exports.syncTables = (force, schema) => {
  module.exports.schema = schema;

  //PRIMARY SCHEMAS//
  //User Data schema
  module.exports.Users = schema.define('users', {
    id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true, unique: true},
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
    id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true, unique: true},
    userId: {type: Sequelize.INTEGER, allowNull: false}, //Foreign-Key, Users table
    char_name: {type: Sequelize.STRING},
    gameId: {type: Sequelize.INTEGER, allowNull: true}, //Foreign-Key, Games table
    currencyId: {type: Sequelize.INTEGER, allowNull: false} //Foreign-Key, CurrencySystem table
  });

  //Games schema
  module.exports.Games = schema.define('games', {
    id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true, unique: true},
    userId: {type: Sequelize.INTEGER, allowNull: false}, //Foreign-Key, Users table
    game_name: {type: Sequelize.STRING},
    currencyId: {type: Sequelize.INTEGER, allowNull: false}, //Foreign-Key, CurrencySystems table
    strict_mode: {type: Sequelize.BOOLEAN, defaultValue: false}
  });

  //SECONDARY SCHEMAS//
  //Currency System schema
  module.exports.CurrencySystems = schema.define('currency_systems', {
    id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true, unique: true},
    system_name: {type: Sequelize.STRING},
    is_custom: {type: Sequelize.BOOLEAN, defaultValue: false},
    userId: {type: Sequelize.INTEGER, allowNull: true} //Foreign-Key, User's table
  }, {timestamps: false});

  //Currency Units schema
  module.exports.CurrencyUnits = schema.define('currency_units', {
    id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true, unique: true},
    unit_name: {type: Sequelize.STRING},
    unit_value: {type: Sequelize.FLOAT},
    currencyId: {type: Sequelize.INTEGER, allowNull: false} //Foreign-Key, CurrencySystems table
  }, {timestamps: false});

  //Item Types schema
  module.exports.ItemTypes = schema.define('item_types', {
    id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true, unique: true},
    type_name: {type: Sequelize.STRING}
  }, {timestamps: false});

  //Item Subtypes schema
  module.exports.ItemSubtypes = schema.define('item_subtypes', {
    id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true, unique: true},
    sub_name: {type: Sequelize.STRING},
    itemId: {type: Sequelize.INTEGER}, //Foreign-Key, ItemTypes table
    icon: {type: Sequelize.STRING},
    is_custom: {type: Sequelize.BOOLEAN, defaultValue: false},
    userId: {type: Sequelize.INTEGER, allowNull: true} //Foreign-Key, Users table
  }, {timestamps: false});

  //Items schema
  module.exports.Items = schema.define('items', {
    id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true, unique: true},
    item_name: {type: Sequelize.STRING},
    typeId: {type: Sequelize.INTEGER, allowNull: false}, //Foreign-Key, ItemTypes table
    subType: {type: Sequelize.INTEGER, allowNull: false}, //Foreign-Key, ItemSubtypes table
    value: {type: Sequelize.FLOAT, defaultValue: 0},
    weight: {type: Sequelize.INTEGER, defaultValue: 0},
    description: {type: Sequelize.STRING},
    dice_type: {type: Sequelize.INTEGER, defaultValue: 0},
    dice_count: {type: Sequelize.INTEGER, defaultValue: 0},
    is_custom: {type: Sequelize.BOOLEAN, defaultValue: false},
    userId: {type: Sequelize.INTEGER, alloNull: true} //Foreign-Key, Users table
  }, {timestamps: false});

  //Foreign Key Configuration//
  //Characters Table
  module.exports.Characters.belongsTo(module.exports.Users);
  module.exports.Characters.belongsTo(module.exports.Games);
  module.exports.Characters.belongsTo(module.exports.CurrencySystems, {as: 'currency'});
  //Games Table
  module.exports.Games.belongsTo(module.exports.Users);
  module.exports.Games.belongsTo(module.exports.CurrencySystems, {as: 'currency'});
  //Currency Systems Table
  module.exports.CurrencySystems.belongsTo(module.exports.Users);
  //Currency Units Table
  module.exports.CurrencyUnits.belongsTo(module.exports.CurrencySystems, {as: 'currency'});

  //Sync All Data
  return schema.sync({force: force});
};