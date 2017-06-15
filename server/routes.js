const path = require('path');
const https = require('https');
const morgan = require('morgan');
const express = require('express');
const bodyParser = require('body-parser');

module.exports = (app, express, db, log) => {
  app.get('/', (req, res) => {
    res.send('Success! Natural 20!');
  });
};