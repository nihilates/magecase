'use scrict'
//Helper functions used with the database//
const jwt = require('jsonwebtoken'); //JSON Webtoken helper
const priv = require('./private.js'); //sensitive data

/*WEBTOKEN FACTORY*/
const createIdToken = (user) => {
  return jwt.sign(_.omit(user, 'password'), priv.powerWord, { expiresIn: 60*60*5 });
};

const genID = () => {
  var result = '';
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (var i=0; i<16; i++) {
      result += possible.charAt(Math.floor(Math.random()*possible.length));
  }
  return result;
};

const createAccessToken = () => {
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
/*END OF WEBTOKEN FACTORY*/

/*Response Helpers*/
module.exports.respQuery = (dbResp, req, res) => { //reqToken is an optional boolean to determin if a JWT needs to be added to the response
  if (dbResp) {
    var data = dbResp.dataValues;
    console.log(data);

    // res.json(dbResp).end();
    res.json(dbResp).end();
  } else {
    res.status(500).send('No matching entries');
  }
};

module.exports.respErr = (dbResp, req, res) => {
  res.json({error: dbResp}).status(500).send;
};

//function to parse a submitted identifier and determin it it's a username or user email
module.exports.parseCreds = (creds) => {
  if (creds.identity.includes('@')) {
    return {user_email: creds.identity, password: creds.passwd};
  } else {
    return {user_name: creds.identity, password: creds.passwd};
  }
};