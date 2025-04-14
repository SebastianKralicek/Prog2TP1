var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
//ruta para registr
router.get('/registro', userController.mostrarRegistro);
//ruta login
router.get('/login', userController.mostrarLogin);
//ruta perfil
router.get('/profile', userController.mostrarPerfil);



module.exports = router;
