'use strict'
const hlp = require('../helper');

//API routes for the Items table
module.exports = (app, db) => {

  //gets all characters owned by a user
  app.get('/api/currencysys', (req, res) => {
    let userId = req.query.userId;

    db.CurrencySystems.findAll({where: {$or: [{is_custom: false}, {userId: userId}]}}).then(system => {
      hlp.respQuery(system, req, res);
    }).catch((err) => {
      hlp.respErr(err, req, res);
    });
  });
};