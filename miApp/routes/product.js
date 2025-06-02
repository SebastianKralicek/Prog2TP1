const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/', productController.mostrarProduct);
router.get('/add', productController.mostrarProductAdd);
router.get('/id/:id', productController.mostrarProductID); 
router.get('/search',productController.mostrarSearch);
router.post('/id/:id', productController.agregarComentario);
router.post('/add',productController.agregarProduct);

module.exports = router;