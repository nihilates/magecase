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
    // let result = {
    //   params: req.params,
    //   body: req.body
    // };
    // console.log('LOGGING RESULT:', result)
    // res.status(200).send('Received');
    let charId = req.params.charId;

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