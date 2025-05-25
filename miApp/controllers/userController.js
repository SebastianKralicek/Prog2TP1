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
            pass: passEncriptada
        }
        db.User.create(usuario)
        .then(function(users){
            return res.redirect('login')
        })
        .catch(function(error){
            return res.send(error)
        })
    },

    ProcesoLogin: function(req,res){
        let EmailUsuario = req.body.mail;
        let ContraUsuario = req.body.pass;
        

        db.User.findOne({where: {mail: EmailUsuario}})
        .then(function(user){
            if(!user){
                return res.render("login", {error: "Los datos no coinciden"})
            }

            let ChequeoContra = bcrypt.compareSync(ContraUsuario, user.pass);
            if (!ChequeoContra){
                return res.render("login", {error: "Los datos no coinciden"})
            }
            
            let ContraReintento = req.body.passretry;
            if(ContraUsuario != ContraReintento)
            {
                return res.render("login", {error: "La contrasena no coincide"});
            };

            req.session.userLogged = {
                id: user.id,
                user: user.userName,
                email: user.mail,
                DNI: user.dni,
                Password: user.pass
            };
            if(req.body.recordame){
                res.cookie('userMail', user.mail, {maxAge: 1000 * 60 * 5});
            }
            return res.redirect('/profile')
        })
        .catch(function(error){
            return res.send(error);
        });
    }
};
module.exports = controlador