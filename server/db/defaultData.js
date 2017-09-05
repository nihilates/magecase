'use strict'
const db = require('./db.js');
//Seed Data//
const sample = require('./defaults/sampleData.js'); //sample user-created data
const currency = require('./defaults/currencies.js'); //currencies of all systems
const types = require('./defaults/types.js'); //types and subtypes of items
const shops = require('./defaults/shopTypes.js') //types of shops
const weapons5e = require('./defaults/5e/weapons.js'); //weapons from 5e
const assets = require('./defaults/assets.js'); //types of assets
const mountsAnimals = require('./defaults/5e/mountsAnimals.js'); //mounts & animals from 5e

module.exports.seedData = db => {
  //Default Currency Options//
  currency.systems.forEach(system => {
    db.CurrencySystems.create(system);
  });

  currency.units.forEach(unit => {
    db.CurrencyUnits.create(unit);
  });

  //Default Item Type & Subtype Options//
  types.main.forEach(type => { //create main types
    db.ItemTypes.create(type);
  });

  types.sub.forEach(subtype => { //create subtypes
    db.ItemSubtypes.create(subtype);
  });

  //Default Item Options//
  //5e Weapons//
  weapons5e.items.forEach(item => {
    db.Items.create(item);
  });

  //Default Asset Type Options//
  assets.types.forEach(type => {
    db.AssetTypes.create(type);
  });

  //Default Asset Options//
  mountsAnimals.assets.forEach(asset => {
    db.Assets.create(asset);
  });

  //Default Shop Type Options//
  shops.types.forEach(type => {
    db.ShopTypes.create(type);
  })

  //Sample User Created Data//
  sample.users.forEach(user => { //Create sample users
    db.Users.create(user);
  });
  sample.games.forEach(game => { //Create sample games
    db.Games.create(game);
  });
  sample.currencySystems.forEach(system => {
    db.CurrencySystems.create(system);
  });
  sample.currencyUnits.forEach(unit => {
    db.CurrencyUnits.create(unit)
  });
  // sample.characters.forEach(character => { //Create sample characters
  //   db.Characters.create(character);
  // });
  sample.inventories.forEach(entry => {
    db.Inventory.create(entry);
  });
  sample.shops.forEach(shop => {
    db.Shops.create(shop);
  });
  sample.shopInventories.forEach(entry => {
    db.ShopInventory.create(entry);
  });
};