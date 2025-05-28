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
            email: req.body.mail,
            nombreUsuario: req.body.userName,
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
            console.log(error);
            return res.send(error)
        })
    },

    ProcesoLogin: function(req,res){
        let EmailUsuario = req.body.mail;
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
            
            let ContraReintento = req.body.passretry;
            if(ContraUsuario != ContraReintento)
            {
                return res.render("login", {error: "La contrasena no coincide"});
            };

            req.session.userLogged = {
                id: User.id,
                user: User.userName,
                email: User.email,
                dni: User.dni,
                Password: User.contrasenia
            };
            if(req.body.recordame){
                res.cookie('userMail', user.email, {maxAge: 1000 * 60 * 5});
            }
            return res.redirect('/users/profile')
        })
        .catch(function(error){
            return res.send(error);
        });
    }
};
module.exports = controlador