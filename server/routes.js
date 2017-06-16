const path = require('path');
const https = require('https');
const morgan = require('morgan');
const express = require('express');
const bodyParser = require('body-parser');

module.exports = (app, express, db) => {

  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', require('./headers-list'));
    next();
  });

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: true}));

  //API calls for User Routes
  require('./routes/userRoutes.js')(app, db);
  require('./routes/itemRoutes.js')(app, db);

  //Catch-All for GET requests
  app.get('/', (req, res) => {
    res.send('Success! Natural 20!');
  });
};
