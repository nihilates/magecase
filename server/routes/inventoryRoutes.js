'use strict'
const hlp = require('../helper');

//API routes for the Items table
module.exports = (app, db) => {

  app.get('/api/inventory/all', (req, res) => {
    let charId = req.query.charId;

    db.Inventory.findAll({
      where: {charId: charId},
      include: {model: db.Items}
    }).then(entries => {
      hlp.respQuery(entries, req, res);
    }).catch((err) => {
      hlp.respErr(err, req, res);
    });
  });

  app.put('/api/inventory/update/:charId', (req, res) => {
    let charId = req.params.charId;
    console.log('CharID is:',charId)
    console.log('Inventory ID is:',req.body.id)
    console.log('Item Count is:',req.body.count)

    db.Inventory.find({where: {charId: charId}}).then(inventory => {
      if (!inventory) {
        res.status(500).send('Inventory Not Found');
      } else {
        db.Inventory.update({
          count: req.body.count
        }, {where: {id: req.body.id}});
        hlp.respQuery(inventory, req, res);
      }
    }).catch((err) => {
      hlp.respErr(err, req, res);
    });
  });
};