'use strict'
const hlp = require('../helper');

//API routes for the Items table
module.exports = (app, db) => {

  //gets all characters owned by a user
  app.get('/api/chars', (req, res) => {
    let userId = req.query.userId;

    db.Characters.findAll({where: {userId: userId}}).then(chars => {
      hlp.respQuery(chars, req, res);
    }).catch((err) => {
      hlp.respErr(err, req, res);
    });
  });

  app.post('/api/chars/create', (req, res) => {
    let userId = req.body.userId;
    let charName = req.body.character_name;
    let currencyId = req.body.currencyId;

    db.Characters.create({
      userId: userId,
      character_name: charName,
      currencyId: currencyId
    }).then(character => {
      hlp.respQuery(character, req, res);
    }).catch(err => {
      hlp.respErr(err, req, res);
    })
  });
};