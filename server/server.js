'use strict'
const express = require('express');
const path = require('path');
const db = require('./db/db.js');
const config = require('./config.js');
const app = express();

//Syncronize the Database
db.syncTables(false, config.database);

//Connect the server
app.listen(config.port, () => {
  console.log('Roll to build server on', config.port + '...');
});

//Connect the appropriate routes
require('./routes.js')(app, express, db);