var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
//ruta para registr
router.get('/registro', userController.mostrarRegistro);
//Procesa el form y guarda datos en db
router.post('/registro', userController.CrearRegistro) 
//ruta login
router.get('/login', userController.mostrarLogin);
//ruta perfil
router.get('/profile', userController.mostrarPerfil);
//Crear ruta por post que procese el login
router.post('/login', userController.ProcesoLogin)
//crear ruta para logout
router.post('/logout', userController.Logout)







module.exports = router;
