'use strict'
const express = require('express');
const path = require('path');
const db = require('./db/db.js');
const config = require('./config.js');

const app = express();

db.syncTables(false, config.database);

app.listen(config.port, () => {
  console.log('Roll to build server on', config.port + '...');
});

require('./routes.js')(app, express, db);