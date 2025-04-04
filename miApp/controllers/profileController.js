const data = require('../db/data')

const controlador = {
    mostrarPerfil: function(req,res){
        return res.render('profile',  {usuario: data.usuario})
    },
};

module.exports = controlador;