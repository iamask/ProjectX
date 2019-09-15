var express = require('express');
var router = express.Router();
const data = require('/Users/ajanair/Documents/node/hello/myExpressApp/users.json')


/* GET users listing. */
router.get('/', function(req, res, next) {
    res.header("Content-Type",'application/json');

       // res.write("Current date and time: " + dateTime.CurrentDateTime());


//  res.send('respond with a resource');
//__dirname
    res.send(JSON.stringify(data));
    res.download(data)

});

module.exports = router;

