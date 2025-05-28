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
            email: req.body.email,
            username: req.body.userName,
            dni: req.body.dni,
            pass: passEncriptada
        }
        db.Usuario.create(usuario)
        .then(function(users){
            return res.redirect('/users/login')
        })
        .catch(function(error){
            return res.send(error)
        })
        
    },

    ProcesoLogin: function(req,res){
        if (req.session.userLogged) {
        return res.redirect('/users/profile');
    }
    
        let EmailUsuario = req.body.mail;
        let ContraUsuario = req.body.pass;
        

        db.Usuario.findOne({where: {email: EmailUsuario}})
        .then(function(Usuario){
            if(!Usuario){
                return res.render("login", {error: "Los datos no coinciden"})
            }

            let ChequeoContra = bcrypt.compareSync(ContraUsuario, Usuario.pass);
            if (!ChequeoContra){
                return res.render("login", {error: "Los datos no coinciden"})
            }

            req.session.userLogged = {
                id: Usuario.id,
                user: Usuario.userName,
                email: Usuario.email,
                dni: Usuario.dni,
                Password: Usuario.contrasenia
            };
            if(req.body.recordame){
                res.cookie('userMail', user.email, {maxAge: 1000 * 60 * 5});
            }
            return res.redirect('/users/profile')
        })
        .catch(function(error){ 
        console.error(error);
        return res.render("login", { error: "Hubo un problema, inténtalo nuevamente." });
});
    }
};
module.exports = controlador