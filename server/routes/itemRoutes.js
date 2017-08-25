'use strict'
const hlp = require('../helper');

//API routes for the Items table
module.exports = (app, db) => {

  //gets a list of all items on the items table; this will change to be more specific when we go live
  app.get('/api/items/all', (req, res) => {
    db.Items.findAll({include: [db.ItemTypes, db.ItemSubtypes]}).then(items => {
      hlp.respQuery(items, req, res);
    }).catch((err) => {
      hlp.respErr(err, req, res);
    });
  });

  //gets a specific item type
  app.get('/api/items/type', (req, res) => {
    let typeId = req.query.typeId;

    db.ItemTypes.find({where: {id: typeId}}).then(type => {
      hlp.respQuery(type, req, res);
    }).catch((err) => {
      hlp.respErr(err, req, res);
    });
  });

  app.get('/api/items/subtype', (req, res) => {
    let subId = req.query.subId;

    db.ItemSubtypes.find({where: {id: subId}}).then(type => {
      hlp.respQuery(type, req, res);
    }).catch((err) => {
      hlp.respErr(err, req, res);
    });
  });

};