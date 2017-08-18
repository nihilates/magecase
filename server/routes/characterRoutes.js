'use strict'
const hlp = require('../helper');

//API routes for the Items table
module.exports = (app, db) => {

  //gets a specific item type
  app.get('/api/chars/', (req, res) => {
    let userId = req.query.userId;

    db.Characters.find({where: {id: userId}}).then(chars => {
      hlp.respQuery(chars, req, res);
    }).catch((err) => {
      hlp.respErr(err, req, res);
    });
  });
};