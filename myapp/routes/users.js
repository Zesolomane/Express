var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource');
});

router.get('/pushingP',(req,res)=>{
  console.log('Here are all the users');
  console.log(users);

})
module.exports = router;
