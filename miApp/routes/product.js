const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/', productController.mostrarProduct);
router.get('/add', productController.mostrarProductAdd);
// router.get('/:id', productController.mostrarProductID); 
router.get('/product', function(req, res){
    const producto = data.products[0];
    res.render('product', {producto});
})

module.exports = router;