const db = require('./db.js');

module.exports.seedData = (db) => {

  //TEMPORARY SAMPLE DATA//
  db.Users.create({
    user_name: 'admin',
    user_email: 'admin@magecase.com',
    password: 'buttonmashing',
    premium_status: true,
    user_icon: 'www.url_to_icon.net',
    char_count: 2,
    game_count: 1
  });

  db.Characters.create({
    char_name: 'Biff Meatwagon',
    user: 1,
    currency_sys: 1,
    game: 1
  });

  db.Games.create({
    game_name: 'Fantasy Texas',
    user: 1,
    currency_sys: 1
  });
  //END OF SAMPLE DATA//

  //Default Currency Options//
  //D&D Standard
  db.CurrencySystems.create({
    system_name: 'D&D Standard'
  });

  db.CurrencyUnits.create({
    unit_name: 'Copper',
    unit_value: 0.01,
    currency_sys: 1
  });
  db.CurrencyUnits.create({
    unit_name: 'Silver',
    unit_value: 0.1,
    currency_sys: 1
  });
  db.CurrencyUnits.create({
    unit_name: 'Gold',
    unit_value: 1,
    currency_sys: 1
  });
};

