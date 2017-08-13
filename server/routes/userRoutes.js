'use strict'
const hlp = require('../helper');

//API routes for the Users table
module.exports = (app, db) => {
  app.get('/api/users', (req, res) => {
    //Get all entries on the user's table
    db.Users.findAll().then((users) => {
      hlp.respQuery(users, req, res);
    }).catch((err) => {
      hlp.respErr(err, req, res);
    });
  };

  app.post('/api/users', (req, res) => {
    //Shorten the incoming data terms
    let name = req.body.user_name;
    let email = req.body.user_email;
    let passwd = req.body.password;

    //Create an entry on the Users table
    db.Users.create({
      user_name: name,
      user_email: email,
      password: passwd
    });

    //End the POST request
    res.end();
  });
};