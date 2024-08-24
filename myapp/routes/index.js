var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  
  res.cookie('hello, world',{maxAge:60000 * 60});
  console.log(req.headers.cookie);
  console.log(req.cookies.hello);
  res.end();
});

module.exports = router;
