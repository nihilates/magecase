'use strict'
//API routes for the Users table
module.exports = (app, db) => {
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