'use strict'
const hlp = require('../helper');

//API routes for the Items table
module.exports = (app, db) => {

  app.get('/api/auth/items', (req, res) => {
    db.Items.findAll().then(items => {
      hlp.respQuery(items, req, res);
    }).catch((err) => {
      hlp.respErr(err, req, res);
    });
  });
};