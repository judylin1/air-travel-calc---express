var express = require('express');
var router = express.Router();
var logic = require('./../public/javascripts/logic.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Air Travel Calculator' });
});

router.post('/', function(req, res, next) {
  var dep = req.body.departure;
  var arr = req.body.arrival;
  var bags = req.body.bags;
  var seat = req.body.class;
  var wifi = req.body.wifi;
  var discode = req.body.discount;
  var totpri = logic.airfare(dep, arr, bags, seat, wifi, discode).toFixed(2);
  res.render('index', { title: 'Air Travel Calculator', total: totpri });
});

module.exports = router;
