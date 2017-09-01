'use strict'
const Sequelize = require('sequelize');

//Create Schemas for Tables//
module.exports.syncTables = (force, schema) => {
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
  }, {timestamps: true});

  //Character schema
  module.exports.Characters = schema.define('characters', {
    id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true, unique: true},
    userId: {type: Sequelize.INTEGER, allowNull: false}, //Foreign-Key, Users table
    char_name: {type: Sequelize.STRING},
    gameId: {type: Sequelize.INTEGER, allowNull: true}, //Foreign-Key, Games table
    currencyId: {type: Sequelize.INTEGER, allowNull: false} //Foreign-Key, CurrencySystem table
  }, {timestamps: true});

  //Games schema
  module.exports.Games = schema.define('games', {
    id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true, unique: true},
    userId: {type: Sequelize.INTEGER, allowNull: false}, //Foreign-Key, Users table
    game_name: {type: Sequelize.STRING},
    currencyId: {type: Sequelize.INTEGER, allowNull: false}, //Foreign-Key, CurrencySystems table
    strict_mode: {type: Sequelize.BOOLEAN, defaultValue: false}
  }, {timestamps: true});

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
    itemTypeId: {type: Sequelize.INTEGER, allowNull: false}, //Foreign-Key, ItemTypes table
    icon: {type: Sequelize.STRING},
    is_custom: {type: Sequelize.BOOLEAN, defaultValue: false},
    userId: {type: Sequelize.INTEGER, allowNull: true} //Foreign-Key, Users table
  }, {timestamps: false});

  //Items schema
  module.exports.Items = schema.define('items', {
    id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true, unique: true},
    item_name: {type: Sequelize.STRING},
    typeId: {type: Sequelize.INTEGER, allowNull: false}, //Foreign-Key, ItemTypes table
    subTypeId: {type: Sequelize.INTEGER, allowNull: false}, //Foreign-Key, ItemSubtypes table
    value: {type: Sequelize.FLOAT, defaultValue: 0},
    weight: {type: Sequelize.FLOAT, defaultValue: 0},
    description: {type: Sequelize.STRING},
    properties: {type: Sequelize.STRING},
    rangeLo: {type: Sequelize.INTEGER, defaultValue: 0},
    rangeHi: {type: Sequelize.INTEGER, defaultValue: 0},
    versatility: {type: Sequelize.INTEGER, defaultValue: 0},
    damageType: {type: Sequelize.STRING},
    dice_type: {type: Sequelize.INTEGER, defaultValue: 0},
    dice_count: {type: Sequelize.INTEGER, defaultValue: 0},
    is_custom: {type: Sequelize.BOOLEAN, defaultValue: false},
    userId: {type: Sequelize.INTEGER, allowNull: true} //Foreign-Key, Users table
  }, {timestamps: false});

  //Assets Types schema
  module.exports.AssetTypes = schema.define('asset_types', {
    id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true, unique: true},
    type_name: {type: Sequelize.STRING},
    icon: {type: Sequelize.STRING},
    is_custom: {type: Sequelize.BOOLEAN, defaultValue: false},
    userId: {type: Sequelize.INTEGER, allowNull: true} //Foreign-Key, Users table
  }, {timestamps: false});

  //Asset schema
  module.exports.Assets = schema.define('asset', {
    id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true, unique: true},
    asset_name: {type: Sequelize.STRING},
    typeId: {type: Sequelize.INTEGER}, //Foreign-Key, AssetTypes table
    value: {type: Sequelize.FLOAT, defaultValue: 0},
    properties: {type: Sequelize.STRING},
    description: {type: Sequelize.STRING},
    is_custom: {type: Sequelize.BOOLEAN, defaultValue: false},
    userId: {type: Sequelize.INTEGER, allowNull: true} //Foreign-Key, Users table
  }, {timestamps: false});

  //Shop Types schema
  module.exports.ShopTypes = schema.define('shop_types', {
    id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true, unique: true},
    type_name: {type: Sequelize.STRING},
    is_custom: {type: Sequelize.BOOLEAN, defaultValue: false},
    userId: {type: Sequelize.INTEGER, allowNull: true} //Foreign-Key, Users table
  }, {timestamps: false});

  //Shops schema
  module.exports.Shops = schema.define('shops', {
    id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true, unique: true},
    shop_name: {type: Sequelize.STRING},
    typeId: {type: Sequelize.INTEGER, allowNull: false}, //Foreign-Key, ShopTypes table
    userId: {type: Sequelize.INTEGER, allowNull: false}, //Foreign-Key, Users table
    gameId: {type: Sequelize.INTEGER, allowNull: false} //Foreign-Key, Games table
  }, {timestamps: false});

  //Shop Inventory schema
  module.exports.ShopInventory = schema.define('shop_inventory', {
    id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true, unique: true},
    shopId: {type: Sequelize.INTEGER, allowNull: false}, //Foreign-Key, Shops table
    currencyId: {type: Sequelize.INTEGER, allowNull: false}, //Foreign-Key, CurrencySystems table
    itemId: {type: Sequelize.INTEGER, allowNull: false}, //Foreign-Key, Items table
    count: {type: Sequelize.INTEGER, defaultValue: 0}
  }, {timestamps: false});

  //Inventory schema
  module.exports.Inventory = schema.define('inventory', {
    id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true, unique: true},
    charId: {type: Sequelize.INTEGER, allowNull: false}, //Foreign-Key, Characters Table
    itemId: {type: Sequelize.INTEGER, allowNull: false}, //Foreign-Key, Items table
    count: {type: Sequelize.INTEGER, defaultValue: 1}
  }, {timestamps: true});

  //Foreign Key Configuration//
  //User Table Keys
  module.exports.Users.hasMany(module.exports.Characters);
  module.exports.Users.hasMany(module.exports.Games);
  module.exports.Users.hasMany(module.exports.CurrencySystems);
  module.exports.Users.hasMany(module.exports.Items);
  module.exports.Users.hasMany(module.exports.AssetTypes);
  module.exports.Users.hasMany(module.exports.Assets);
  module.exports.Users.hasMany(module.exports.ShopTypes);
  module.exports.Users.hasMany(module.exports.Shops);

  //Characters Table Foreign-Keys
  module.exports.Characters.hasMany(module.exports.Inventory);

  module.exports.Characters.belongsTo(module.exports.Users);
  module.exports.Characters.belongsTo(module.exports.Games, {foreignKey: 'gameId'});
  module.exports.Characters.belongsTo(module.exports.CurrencySystems, {foreignKey: 'currencyId'});
  //Games Table Foreign-Keys
  module.exports.Games.belongsTo(module.exports.Users);
  module.exports.Games.belongsTo(module.exports.CurrencySystems, {as: 'currency'});
  //Currency Systems Table Foreign-Keys
  module.exports.CurrencySystems.hasMany(module.exports.CurrencyUnits);

  module.exports.CurrencySystems.belongsTo(module.exports.Users);
  //Currency Units Table Foreign-Keys
  module.exports.CurrencyUnits.belongsTo(module.exports.CurrencySystems, {foreignKey: 'currencyId'});
  //Item Subtypes Table Foreign-Keys
  module.exports.ItemSubtypes.belongsTo(module.exports.ItemTypes, {foreignKey: 'itemTypeId'});
  //Items Table Foreign-Keys
  module.exports.Items.belongsTo(module.exports.ItemTypes, {foreignKey: 'typeId'});
  module.exports.Items.belongsTo(module.exports.ItemSubtypes, {foreignKey: 'subTypeId'});
  module.exports.Items.belongsTo(module.exports.Users, {foreignKey: 'userId'});
  //Asset Types Table Foreign-Keys
  module.exports.AssetTypes.belongsTo(module.exports.Users);
  //Asset Table Foreign-Keys
  module.exports.Assets.belongsTo(module.exports.AssetTypes, {as: 'type'});
  module.exports.Assets.belongsTo(module.exports.Users);
  //Shop Types Table Foreign-Keys
  module.exports.ShopTypes.belongsTo(module.exports.Users);
  //Shops Table Foreign-Keys
  module.exports.Shops.belongsTo(module.exports.ShopTypes, {as: 'type'});
  module.exports.Shops.belongsTo(module.exports.Users);
  module.exports.Shops.belongsTo(module.exports.Games);
  //Shop Inventory Table Foreign-Keys
  module.exports.ShopInventory.belongsTo(module.exports.Shops);
  module.exports.ShopInventory.belongsTo(module.exports.CurrencySystems, {as: 'currency'});
  module.exports.ShopInventory.belongsTo(module.exports.Items);
  //Character Inventory Table Foreign-Keys
  module.exports.Inventory.belongsTo(module.exports.Items);

  //Sync All Data
  return schema.sync({force: force});
};