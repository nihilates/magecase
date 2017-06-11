const db = require('./db.js');

module.exports.seedData = (db) => {
  db.Users.create({
    user_name: 'admin',
    user_email: 'admin@magecase.com',
    password: 'buttonmashing',
    premium_status: true,
    user_icon: 'www.url_to_icon.net',
    char_count: 2,
    game_count: 1
  });
};

