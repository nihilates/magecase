'use strict'
const db = require('./db.js');
const defaults = require('./defaultData.js');
const config = require('../config.js');

db.syncTables(true, config.database).then(() => {
  defaults.seedData(db);
}).end();