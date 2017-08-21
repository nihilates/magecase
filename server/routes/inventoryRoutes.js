'use strict'
const hlp = require('../helper');

//API routes for the Items table
module.exports = (app, db) => {

  app.get('/api/inventory/all', (req, res) => {
    let charId = req.query.charId;

    db.Inventory.findAll({where: {charId: charId}}).then(entries => {
      hlp.respQuery(entries, req, res);
    }).catch((err) => {
      hlp.respErr(err, req, res);
    });
  });

};