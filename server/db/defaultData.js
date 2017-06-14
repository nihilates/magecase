const db = require('./db.js');
//Seed Data//
const currency = require('./defaults/currencies.js'); //currencies of all systems
const types = require('./defaults/types.js'); //types and subtypes of items
const weapons5e = require('./defaults/5e/weapons.js'); //weapons from 5e
const assets = require('./defaults/assets.js'); //types of assets
const mountsAnimals = require('./defaults/5e/mountsAnimals.js'); //mounts & animals from 5e

module.exports.seedData = (db) => {
  //Default Currency Options//
  currency.systems.forEach((system) => {
    db.CurrencySystems.create(system);
  });

  currency.units.forEach((unit) => {
    db.CurrencyUnits.create(unit);
  });

  //Default Item Type & Subtype Options//
  types.main.forEach((type) => { //create main types
    db.ItemTypes.create(type);
  });

  types.sub.forEach((subtype) => { //create subtypes
    db.ItemSubtypes.create(subtype);
  });

  //Default Item Options//
  //5e Weapons//
  weapons5e.items.forEach((item) => {
    db.Items.create(item);
  });

  //Default Asset Type Options//
  assets.types.forEach((type) => {
    db.AssetTypes.create(type);
  });

  //Default Asset Options//
  mountsAnimals.assets.forEach((asset) => {
    db.Assets.create(asset);
  });

  //TEMPORARY SAMPLE DATA//
  /*
    Sample user data for test purposes only. Biff Meatwagon for CEO.
  */
  db.Users.create({
    user_name: 'admin',
    user_email: 'admin@magecase.com',
    password: 'buttonmashing',
    premium_status: true,
    user_icon: 'www.url_to_icon.net',
    char_count: 2,
    game_count: 1
  });

  db.Games.create({
    game_name: 'Fantasy Texas',
    userId: 1,
    currencyId: 1
  });

  db.Characters.create({
    char_name: 'Biff Meatwagon',
    userId: 1,
    gameId: 1,
    currencyId: 1
  });
  //END OF SAMPLE DATA//
};