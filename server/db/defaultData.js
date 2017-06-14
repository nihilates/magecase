const db = require('./db.js');
const currency5e = require('./defaults/5e/currencies.js');

module.exports.seedData = (db) => {
  //Default Currency Options//
  db.CurrencySystems.create({ //5th Edition D&D
    system_name: 'D&D Fifth Edition'
  }).then(() => { //Create the currency units once the system has been created
    currency5e.units.forEach((unit) => {
      db.CurrencyUnits.create(unit);
    });
  });

  //Default Item Options//
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

