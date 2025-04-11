const data = require('../db/data')

const controlador = {
    mostrarPerfil: function (req, res) {
        const usuario = data.usuarios[0]; 
        res.render("profile", { usuario }); 
      }
};

module.exports = controlador;