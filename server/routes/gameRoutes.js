'use strict'
const hlp = require('../helper');

//API routes for the Items table
module.exports = (app, db) => {

  //gets all games owned by a user
  app.get('/api/games', (req, res) => {
    let userId = req.query.userId;

    db.Games.findAll({where: {userId: userId}}).then(games => {
      hlp.respQuery(games, req, res);
    }).catch((err) => {
      hlp.respErr(err, req, res);
    });
  });
};