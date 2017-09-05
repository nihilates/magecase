'use strict'
const path = require('path');
const https = require('https');
const morgan = require('morgan');
const express = require('express');
const jwt = require('express-jwt');
const bodyParser = require('body-parser');
const priv = require('./private.js');

module.exports = (app, express, db) => {

  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', require('./headers-list'));
    next();
  });

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: true}));
  //Configuration for Protected Authentication Routes
  app.use('/api/auth',
    jwt({secret: priv.powerWord, aud: priv.audience, iss: priv.issuer}),
    (req, res, next) => {
      if (!req.user.iat) {
        res.status(401).send('Authorization Failed');
      } else {
        next();
      }
    }
  );

  //API calls for User Routes
  require('./routes/defaultDataRoutes.js')(app, db);
  require('./routes/userRoutes.js')(app, db);
  require('./routes/characterRoutes.js')(app, db);
  require('./routes/gameRoutes.js')(app, db);
  require('./routes/itemRoutes.js')(app, db);
  require('./routes/currencyRoutes.js')(app, db);
  require('./routes/inventoryRoutes.js')(app, db);

  //Catch-All for GET requests
  app.get('/', (req, res) => {
    res.send('Success! Natural 20!');
  });
};
