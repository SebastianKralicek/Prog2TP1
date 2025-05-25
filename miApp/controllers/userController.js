const data = require('../db/data')
let db = require('../models')
let bcrypt = require('bcryptjs')

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
    CrearRegistro: function(req, res){
        let passEncriptada = bcrypt.hashSync(req.body.pass, 10)
        let usuario = {
            mail: req.body.mail,
            username: req.body.userName,
            DNI: req.body.dni,
            pass: passEncriptada,
            passretry: req.body.passretry
        }
        db.User.create(usuario)
        .then(function(users){
            return res.redirect('/login')
        })
        .catch(function(error){
            return res.send(error)
        })
    },

    ProcesoRegistro: function(req,res){
        let EmailUsuario = req.body.mail;
        let ContraUsuario = req.body.pass;

        db.User
    }
};
module.exports = controlador