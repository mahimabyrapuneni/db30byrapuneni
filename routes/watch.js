var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('watch', { title: 'Search results watch' });
});

module.exports = router;

var express = require('express'); 
const watch_controlers= require('../controllers/watch'); 
var router = express.Router(); 
 
/* GET watchs */ 
router.get('/', watch_controlers.watch_view_all_Page ); 
module.exports = router; 