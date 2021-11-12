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

// Handle watch update form on PUT. 
exports.watch_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await watch.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.watch_type)  
               toUpdate.watch_type = req.body.watch_type; 
        if(req.body.cost) toUpdate.cost = req.body.cost; 
        if(req.body.size) toUpdate.size = req.body.size; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} failed`); 
    }
    if(req.body.checkboxsale) toUpdate.sale = true; 
else toUpdate.same = false; 
}; 
 
 
 
module.exports = router; 

