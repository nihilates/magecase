'use strict'
const hlp = require('../helper');

//API routes for the Items table
module.exports = (app, db) => {
  app.get('/api/items', (req, res) => {
    console.log('Attempting Query...')
    db.Items.findAll().then((items) => {
      console.log('Successful Query')
      hlp.respQuery(items, req, res);
    }).catch((err) => {
      console.log('Failed Query')
      hlp.respErr(err, req, res);
    });
  });
};