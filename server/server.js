'use strict'
const express = require('express');
// const path = require('path');
// const mysql = require('mysql');
// const Sequelize = require('sequelize');

// const db = require('./db/db.js');
// const schema = new Sequelize(config.dbName, config.uname, config.password);

const app = express();

app.get('/', (req, res) => {
  res.send('Natural 20!');
});

app.listen(8080, () => {
  console.log('Roll to build server on 8080...');
});