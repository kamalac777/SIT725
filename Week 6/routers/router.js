let express = require('express');
let router = express.Router();
let controller = require('../controllers/controller');

router.post('/contact', function(req,res){
    controller.postContact(req,res);
});

router.get('/contacts', (req,res)=>{
    controller.getAllContacts(req,res);
});


module.exports = router;