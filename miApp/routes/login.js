const express = require('express');
const router = express.Router();
const loginController = require('../controllers/loginController');

router.get('/', loginController.mostrarLogin)
router.get('/procesoLogin', loginController.procesoLogin)

module.exports = router;