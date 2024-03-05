var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond');
});

router.post('/logout',function(req,res){
  res.send("logout");
})

module.exports = router;
