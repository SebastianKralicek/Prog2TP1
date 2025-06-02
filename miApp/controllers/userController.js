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
        if (!req.session.userLogged) {
            return res.redirect('/users/login');
        }

        const usuario = req.session.userLogged;
        db.Product.findAll({
            where: {
                id_usuario: usuario.id 
            }
        })
        .then(function(productos) {
            res.render("profile", { 
                usuario: usuario,
                productos: productos,
                totalProductos: productos.length
            });
        })
        .catch(function(error) {
            return res.send(error);
        });
    },

    CrearRegistro: function(req, res){ 
        let passEncriptada = bcrypt.hashSync(req.body.pass, 10)
        let usuario = {
            email: req.body.mail,
            nombre_usuario: req.body.userName,
            dni: req.body.dni,
            contrasenia: passEncriptada,
            fecha_nacimiento: req.body.nacimiento,
            foto_perfil: req.body.ftperfil,
        }
        db.User.create(usuario)
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
        .then(function(user){
            if(!user){
                return res.render("login", {error: "Los datos no coinciden"})
            }

            let ChequeoContra = bcrypt.compareSync(ContraUsuario, user.contrasenia);
            if (!ChequeoContra){
                return res.render("login", {error: "Los datos no coinciden"})
            }

            req.session.userLogged = {
                id: user.id,
                email: user.email,
                nombre_usuario: user.nombre_usuario,
                dni: user.dni,
            };

            if(req.body.recordame){
                res.cookie('userMail', user.email, {maxAge: 1000 * 60 * 60 * 24 * 7});
                console.log('Cookie "userMail" seteada con:', user.email);
            }
            return res.redirect('/users/profile')
        })
        .catch(function(error){ 
        console.error(error);
        return res.render("login", { error: "Hubo un problema, inténtalo nuevamente." });
}); 
    },

    Logout: function(req, res){
        req.session.destroy(function(){
            res.redirect('/')
        });
    }
};
module.exports = controlador