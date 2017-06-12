const db = require('./db.js');

module.exports.seedData = (db) => {
  //Default Currency Options//
  //D&D Standard
  db.CurrencySystems.create({
    system_name: 'D&D Standard'
  }).then(() => { //Create the currency units once the system has been created
    db.CurrencyUnits.create({
      unit_name: 'Copper',
      unit_value: 0.01,
      currencyId: 1
    });
    db.CurrencyUnits.create({
      unit_name: 'Silver',
      unit_value: 0.1,
      currencyId: 1
    });
    db.CurrencyUnits.create({
      unit_name: 'Gold',
      unit_value: 1,
      currencyId: 1
    });
  });
  /*
    Here we will create default currencies for AD&D, D&D 3.5, D&D 4, D&D 5, and Pathfinder
    All users will have access to these defaults and may use them as a template to create
    custom currency systems available to only them
  */

  //Default Item Options ordered by game system//
  /*
    Here we will create default collections of items to be available to all players and games.
    We will use player/game-master handbooks to settle on this data.
  */

  //TEMPORARY SAMPLE DATA//
  /*
    Sample user data for test purposes only. Biff Meatwagon for CEO.
  */
  db.Users.create({
    user_name: 'admin',
    user_email: 'admin@magecase.com',
    password: 'buttonmashing',
    premium_status: true,
    user_icon: 'www.url_to_icon.net',
    char_count: 2,
    game_count: 1
  });

  db.Games.create({
    game_name: 'Fantasy Texas',
    userId: 1,
    currencyId: 1
  });

  db.Characters.create({
    char_name: 'Biff Meatwagon',
    userId: 1,
    gameId: 1,
    currencyId: 1
  });
  //END OF SAMPLE DATA//
};

