'use scrict'
//Helper functions used with the database//
const _ = require('lodash'); //lodash for object property managemnet
const jwt = require('jsonwebtoken'); //JSON Webtoken helper
const priv = require('./private.js'); //sensitive data

/*WEBTOKEN FACTORY*/
const createIdToken = (user) => {
  return jwt.sign(_.pick(user, ['id','user_name','user_email']), priv.powerWord, { expiresIn: 60*60*5 });
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
module.exports.respQuery = (dbResp, req, res, reqToken) => { //reqToken is an optional boolean to determin if a JWT needs to be added to the response
  if (dbResp) {
    var userData = _.pick(dbResp.dataValues, ['id', 'user_name', 'user_email', 'user_icon', 'premium_status']);
//token isn't required? Send just the dbResp.      : Otherwise, send the dbResp and a new token pair
    // !reqToken ? res.status(200).send(dbResp).end() : res.status(200).send({dbResp, auth: {id_token: createIdToken(dbResp.dataValues), access_token: createAccessToken()}});
    !reqToken ? res.status('200').send(dbResp).end() : res.status('200').send({userData, auth: {id_token: createIdToken(userData), access_token: createAccessToken()}});
  } else {
    res.status('204').send('No matching results');
  }
};

module.exports.respErr = (dbResp, req, res) => {
  // res.json({error: dbResp}).status(500).send;
  res.status('500').send({error: dbResp}).end();
};

//function to parse a submitted identifier and determin it it's a username or user email
module.exports.parseCreds = (creds) => {
  if (creds.identity.includes('@')) {
    return {user_email: creds.identity, password: creds.passwd};
  } else {
    return {user_name: creds.identity, password: creds.passwd};
  }
};


// /*Response Helpers*/
// module.exports.respQuery = (dbResp, req, res, reqToken) => { //reqToken is an optional boolean to determin if a JWT needs to be added to the response
//   if (dbResp) {
//     var userData = _.pick(dbResp.dataValues, ['id', 'user_name', 'user_email', 'user_icon', 'premium_status']);
// //token isn't required? Send just the dbResp.      : Otherwise, send the dbResp and a new token pair
//     // !reqToken ? res.status(200).send(dbResp).end() : res.status(200).send({dbResp, auth: {id_token: createIdToken(dbResp.dataValues), access_token: createAccessToken()}});
//     !reqToken ? res.status(200).send(dbResp).end() : res.status(200).send({userData, auth: {id_token: createIdToken(userData), access_token: createAccessToken()}});
//   } else {
//     res.status(204).send('No matching results');
//   }
// };

// module.exports.respErr = (dbResp, req, res) => {
//   // res.json({error: dbResp}).status(500).send;
//   res.status(500).send({error: dbResp}).end();
// };
