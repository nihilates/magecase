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

  app.post('/api/inventory/add', (req, res) => {
    let charId = req.body.charId;
    let itemId = req.body.itemId;
    let count = req.body.count;

    db.Inventory.create({
      charId: charId,
      itemId: itemId,
      count: count
    }).then(entry => {
      hlp.respQuery(entry, req, res);
    }).catch(err => {
      hlp.respErr(err, req, res);
    });
  });

  app.put('/api/inventory/update', (req, res) => {
    let charId = req.body.charId;

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

  app.delete('/api/inventory/remove', (req, res) => {
    let charId = req.body.charId;
    let id = req.body.id;
    console.log('LOOK HERE FRIEND', req)
    console.log('THIS IS A THING', req.body)

    db.Inventory.destroy({where: {$and: [{id: id}, {charId: charId}]}})
    .then(death => {
      hlp.respQuery(death, req, res)
    }).catch(err => {
      hlp.respErr(err, req, res);
    })
  });

};


    // db.Inventory.destroy({where: {$and: [{id: id}, {charId: charId}]}})
    // .then(death => {
    //   hlp.respQuery(death, req, res)
    // }).catch(err => {
    //   hlp.respErr(err, req, res);
    // })