var express = require('express');
var router = express.Router();
//var request = require('request');





/* GET users listing. */
router.get('/', function(req, res, next) {
    
    //res.header("Content-Type",'application/json');
    req.time = new Date().toString();
    next();
  }, function(req, res) {
    res.json({time: req.time});
  });

       // res.write("Current date and time: " + dateTime.CurrentDateTime());


//  res.send('respond with a resource');
//__dirname
   // res.send(JSON.stringify(data));

module.exports = router;

