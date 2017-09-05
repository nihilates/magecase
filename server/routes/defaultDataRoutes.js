'use strict'
const hlp = require('../helper');

//API routes for the Users table
module.exports = (app, db) => {

  app.get('/api/default/items', (req, res) => {
    db.Items.findAll({
      where: {is_custom: false},
      include: [db.ItemTypes, db.ItemSubtypes]
    }).then(items => {
      hlp.respQuery(items, req, res);
    }).catch((err) => {
      hlp.respErr(err, req, res);
    });
  });

  // app.get('/api/data/defaults', (req, res) => {
  //   db.Users.findAll({
  //     attributes: ['user_name','user_email','user_icon','premium_status'],
  //     where: hlp.parseCreds(userReq),
  //     include: [
  //       {model: db.Characters,
  //         include: [
  //           {model: db.Inventory, include: db.Items},
  //           {model: db.CurrencySystems,
  //             include: db.CurrencyUnits
  //           },
  //           {model: db.Games,
  //             include: {
  //               model: db.CurrencySystems,
  //               include: db.CurrencyUnits
  //             }
  //           },
  //         ]
  //       },
  //       db.Games,
  //       {model: db.CurrencySystems, include: db.CurrencyUnits},
  //       db.Items,
  //       db.AssetTypes,
  //       db.ShopTypes,
  //       db.Shops
  //     ]}).then(users => {
  //     hlp.respQuery(users, req, res);
  //   }).catch((err) => {
  //     hlp.respErr(err, req, res);
  //   });
  // });
};