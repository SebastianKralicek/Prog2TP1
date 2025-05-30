const data = require('../db/data')
let db = require('../database/models')
let bcrypt = require('bcryptjs')


const controlador = {
    mostrarRegistro: function(req,res){
        return res.render('register', {error: null})
    },
    mostrarLogin: function(req,res){
        return res.render('login', {error: null})
    },
    mostrarPerfil: function(req, res) {
    console.log("Sesión en perfil:", req.session.userLogged);
    if (!req.session.userLogged) {
        return res.redirect('/users/login');
    }
    
    const usuario = req.session.userLogged;
    const productos = data.products;
    res.render("profile", { usuario, productos });
    },

    CrearRegistro: function(req, res){ 
        let passEncriptada = bcrypt.hashSync(req.body.pass, 10)
        let usuario = {
            email: req.body.mail,
            nombreUsuario: req.body.userName,
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
        console.log("BODY DEL LOGIN:", req.body);
        if (req.session.userLogged) {
        return res.redirect('/users/profile');
    }
    
        let EmailUsuario = req.body.email;
        let ContraUsuario = req.body.pass;
        

        db.User.findOne({where: {email: EmailUsuario}})
        .then(function(User){
            if(!User){
                return res.render("login", {error: "Los datos no coinciden"})
            }

            let ChequeoContra = bcrypt.compareSync(ContraUsuario, User.pass);
            if (!ChequeoContra){
                return res.render("login", {error: "Los datos no coinciden"})
            }

            req.session.userLogged = {
                id: User.id,
                user: User.userName,
                email: User.email,
                dni: User.dni,
            };

            if(req.body.recordame){
                res.cookie('userMail', User.email, {maxAge: 1000 * 60 * 60 * 24 * 7});
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