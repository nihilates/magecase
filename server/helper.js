//Helper functions used with the database
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