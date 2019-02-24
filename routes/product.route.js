const express = require('express');
const router = express.Router();



const produuct_controller=require('../controllers/product.controller');


router.get('/test', produuct_controller.test);

router.post('/create', produuct_controller.product_create);
router.get('/:id', produuct_controller.product_details);
router.put('/:id/update', produuct_controller.product_update);
router.delete('/:id/delete', produuct_controller.product_delete);



module.exports=router;