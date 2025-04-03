const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/', productController.mostrarProduct);
router.get('/add', productController.mostrarProductAdd);

module.exports = router;