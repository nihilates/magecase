//API routes for creating new users
const hlp = require('../helper.js'); //helper functions

module.exports = (app, db) => {
  app.post('/api/users', (req, res) => {
    // console.log('db is a:', db);
    // res.end();

    let name = req.body.user_name;
    let email = req.body.user_email;
    let passwd = req.body.password;

    db.Users.create({
      user_name: name,
      user_email: email,
      password: passwd
    });

    console.log('User Created');
    res.send('User Created').end();
  });
};