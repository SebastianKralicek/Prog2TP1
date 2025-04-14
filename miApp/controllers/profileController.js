const data = require('../db/data')

const controlador = {
    mostrarPerfil: function (req, res) {
        const usuario = data.usuarios[0];
        const productos = data.products; 
        res.render("profile", { usuario, productos }); 
      },
   
};

module.exports = controlador;