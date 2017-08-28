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

  //get all item types
  app.get('/api/items/types', (req, res) => {

    db.ItemTypes.findAll().then(type => {
      hlp.respQuery(type, req, res);
    }).catch((err) => {
      hlp.respErr(err, req, res);
    });
  });

  //get all item subtypes that belong to a given itemtype
  app.get('/api/items/subtypes', (req, res) => {
    let typeId = req.query.typeId;

    db.ItemSubtypes.findAll({where: {itemTypeId: typeId}}).then(type => {
      hlp.respQuery(type, req, res);
    }).catch((err) => {
      hlp.respErr(err, req, res);
    });
  });

  //gets a single item subtype and includes its main type in the body of the object
  app.get('/api/items/typeset', (req, res) => {
    let subId = req.query.subId;

    db.ItemSubtypes.find({where: {id: subId}, include: [{model: db.ItemTypes, as: 'itemType'}]}).then(type => {
      hlp.respQuery(type, req, res);
    }).catch((err) => {
      hlp.respErr(err, req, res);
    });
  });

};