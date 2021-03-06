'use strict'
const hlp = require('../helper');
const _ = require('lodash'); //lodash for object property managemnet

//API routes for the Users table
module.exports = (app, db) => {

  /*Development API to check up on tables; disable in production*/
  app.get('/api/users/fulldetails', (req, res) => {
    let userReq = {
      identity: req.query.identity, //"identity" query can be either a username or email; hlp.parseCreds will determin which it is
      passwd: req.query.password
    };
    //Get all details of a user from the user table
    db.Users.findAll({
      attributes: ['user_name','user_email','user_icon','premium_status'],
      where: hlp.parseCreds(userReq),
      include: [
        {model: db.Characters,
          include: [
            {model: db.Inventory, include: db.Items},
            {model: db.CurrencySystems,
              include: db.CurrencyUnits
            },
            {model: db.Games,
              include: {
                model: db.CurrencySystems,
                include: db.CurrencyUnits
              }
            },
          ]
        },
        db.Games,
        {model: db.CurrencySystems, include: db.CurrencyUnits},
        db.Items,
        db.AssetTypes,
        db.ShopTypes,
        db.Shops
      ]}).then(users => {
      hlp.respQuery(users, req, res);
    }).catch((err) => {
      hlp.respErr(err, req, res);
    });
  });

  app.get('/api/auth/users/getall', (req, res) => {
    //Get all entries on the user's table
    db.Users.findAll().then(users => {
      hlp.respQuery(users, req, res);
    }).catch((err) => {
      hlp.respErr(err, req, res);
    });
  });

  app.get('/api/users/login', (req, res) => {
    //Find the specified entry on the users table
    let userReq = {
      identity: req.query.identity, //"identity" query can be either a username or email; hlp.parseCreds will determin which it is
      passwd: req.query.password
    };

    db.Users.find({where: hlp.parseCreds(userReq)}).then(user => {
      hlp.respQuery(user, req, res, true);
    }).catch(err => {
      hlp.respErr(err, req, res);
    });
  });

  app.post('/api/users/signup', (req, res) => {
    //Shorten the incoming data terms
    let name = req.body.user_name;
    let email = req.body.user_email;
    let passwd = req.body.password;

    //Create an entry on the Users table
    db.Users.create({
      user_name: name,
      user_email: email,
      password: passwd
    }).then(user => {
      hlp.respQuery(user, req, res, true);
    }).catch(err => {
      hlp.respErr(err, req, res);
    });
  });
};