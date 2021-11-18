var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var watch_controller = require('../controllers/watch'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/resource', api_controller.api); 
 
/// watch ROUTES /// 
 
// POST request for creating a watch.  
router.post('/watch', watch_controller.watch_create_post); 

 
// DELETE request to delete watch. 
router.delete('/watch/:id', watch_controller.watch_delete); 
 
// PUT request to update watch. 
router.put('/watch/:id', 
watch_controller.watch_update_put); 
 
// GET request for one watch. 
router.get('/watch/:id', watch_controller.watch_detail); 
 
// GET request for list of all watch items. 
router.get('/watch', watch_controller.watch_list); 
// GET request for one watch. 
router.get('/watchs/:id', watch_controller.watch_detail); 
 


 
 
module.exports = router; 

