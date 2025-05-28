const data = require('../db/data')
let db = require('../database/models')
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
            username: req.body.userName,
            email: req.body.email,
            pass: passEncriptada,
            fecha_nacimiento: req.body.nacimiento,
            dni: req.body.dni,
        }
        db.Usuario.create(usuario)
        .then(function(usuarioCreado){
            console.log("usuario crado: " , usuarioCreado)
            return res.redirect('/users/login')
        })
        .catch(function(error){
            return res.send(error)
        })
        
    },

    ProcesoLogin: function(req,res){
        let EmailUsuario = req.body.mail;
        let ContraUsuario = req.body.pass;
        

        db.Usuario.findOne({where: {email: EmailUsuario}})
        .then(function(usuarioEncontrado){
            if(!usuarioEncontrado){
                return res.render("login", {error: "Los datos no coinciden"})
            }

            let ChequeoContra = bcrypt.compareSync(ContraUsuario, usuarioEncontrado.pass);
            if (!ChequeoContra){
                return res.render("login", {error: "Los datos no coinciden"})
            }
            
            let ContraReintento = req.body.passretry;
            if(ContraUsuario != ContraReintento)
            {
                return res.render("login", {error: "La contrasena no coincide"});
            };

            req.session.usuarioLogueado = usuarioEncontrado; 

            if(req.body.recordame){
                res.cookie('userMail', usuarioEncontrado.email, {maxAge: 1000 * 60 * 5});
            }
            return res.redirect('/users/profile')
        })
        .catch(function(error){
            return res.send(error);
        });
    }
};
module.exports = controlador