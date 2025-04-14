const data = require('../db/data')

const controlador = {
    mostrarRegistro: function(req,res){
        return res.render('register')
    },
    mostrarLogin: function(req,res){
        return res.render('login')
    },
    mostrarPerfil: function (req, res) {
        const usuario = data.usuarios[0];
        const productos = data.products; 
        res.render("profile", { usuario, productos }); 
    },
};
module.exports = controlador