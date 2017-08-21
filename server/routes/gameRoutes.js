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

  app.post('/api/games/create', (req, res) => {
    let userId = req.body.userId;
    let game_name = req.body.game_name;
    let currencyId = req.body.currencyId;

    db.Games.create({
      userId: userId,
      game_name: game_name,
      currencyId: currencyId
    }).then(game => {
      hlp.respQuery(game, req, res);
    }).catch(err => {
      hlp.respErr(err, req, res);
    })
  });
};