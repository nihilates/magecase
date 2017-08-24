'use strict'
const hlp = require('../helper');

//API routes for the Items table
module.exports = (app, db) => {

  //gets all default currency systems and custom currency systems that were created by the user
  app.get('/api/currencysys', (req, res) => {
    let userId = req.query.userId;

    db.CurrencySystems.findAll({where: {$or: [{is_custom: false}, {userId: userId}]}})
    .then(system => {
      hlp.respQuery(system, req, res);
    }).catch((err) => {
      hlp.respErr(err, req, res);
    });
  });

  app.get('/api/currencyunits', (req, res) => {
    let currencyId = req.query.currencyId;

    db.CurrencyUnits.findAll({where: {currencyId: currencyId}}).then(unit => {
      hlp.respQuery(unit, req, res);
    }).catch((err) => {
      hlp.respErr(err, req, res);
    });
  });
};