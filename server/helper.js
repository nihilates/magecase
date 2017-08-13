'use scrict'
//Helper functions used with the database//
const jwt = require('jsonwebtoken'); //JSON Webtoken helper
const priv = require('./private.js'); //sensitive data

module.exports.respQuery = (dbResp, req, res) => {
  if (!dbResp) {
    res.status(500).send('No matching entries');
  } else {
    res.json(dbResp).end();
  }
};

module.exports.respErr = (dbResp, req, res) => {
  res.json({error: dbResp}).status(500).send;
};

//function to parse a submitted identifier and determin it it's a username or user email
module.exports.loginFlex = (identifier) => {
  if (identifier.includes('@')) {
    return 'user_email';
  } else {
    return 'user_name';
  }
};

//WEBTOKEN FACTORY//
module.exports.createIdToken = (user) => {
  return jwt.sign(_.omit(user, 'password'), priv.powerWord, { expiresIn: 60*60*5 });
};

function genID() {
  var result = '';
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (var i=0; i<16; i++) {
      result += possible.charAt(Math.floor(Math.random()*possible.length));
  }
  return result;
};

module.exports.createAccessToken = () => {
  return jwt.sign({
    iss: priv.issuer,
    aud: priv.audience,
    exp: Math.floor(Date.now()/1000)+(60*60),
    scope: 'full_access',
    sub: "lalaland|gonto",
    jti: genID(), //Unique ID for the token
    alg: 'HS256'
  }, priv.powerWord);
};