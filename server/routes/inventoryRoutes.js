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
          entry.dataValues.name = item.dataValues.item_name;
          console.log(item.dataValues)
        })
      });

      hlp.respQuery(entries, req, res);
    }).catch((err) => {
      hlp.respErr(err, req, res);
    });
  });

};