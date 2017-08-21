'use strict'
const hlp = require('../helper');

//API routes for the Items table
module.exports = (app, db) => {

  app.get('/api/inventory/all', (req, res) => {
    let charId = req.query.charId;

    db.Inventory.findAll({where: {charId: charId}}).then(entries => {
      //Process the inventory entries here

      entries.forEach(entry => {
        db.Items.find({where: {id: entry.itemId}}).then(item => {
          entry.name = item.item_name;
        })
      });

      hlp.respQuery(entries, req, res);
    }).catch((err) => {
      hlp.respErr(err, req, res);
    });
  });

};