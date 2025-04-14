const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/', productController.mostrarProduct);
router.get('/add', productController.mostrarProductAdd);
// router.get('/:id', productController.mostrarProductID); 
//ruta search
router.get('/search',productController.mostrarSearch);

module.exports = router;