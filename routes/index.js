var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

const admin={
  email:"admin@gmail.com",
  password:12345
}

router.post('/submit',function(req,res,){
  if(req.body.email==admin.email && req.body.password==admin.password)
  {
    res.render('homepage')
  }
  else{
    res.send("invalid user");
  }
})

module.exports = router;
