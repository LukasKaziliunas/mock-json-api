var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/json', function(req, res, next) {

  var txt = '{"data": {  "name": "Joe", "age": 25 }}';

  var json = JSON.parse(txt);
  res.json(json);
});

module.exports = router;
