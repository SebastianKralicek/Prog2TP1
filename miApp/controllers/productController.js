const data = require('../db/data')
const db = require("../database/models")
const op = db.Sequelize.Op;



const controlador = {
    mostrarProduct: function (req, res) {
        const productos = data.products[3]; 
        res.render("product", { productos });
    },
    mostrarProductAdd: function(req,res){
        return res.render('product-add',  {usuario: req.session.userLogged})
         
    },
    mostrarProductID:function(req, res) {
        let id = req.params.id;
        db.Product.findByPk(id, {
            include: [
                {
                    association: 'comentarios',
                    include: ['user']
                }
            ]
            })
            .then(function(productos) {
                if (productos) {
                    res.render("product", { productos: productos, usuario: req.session.userLogged });
                } else {
                    res.render("product", { productos: [], mensaje: "No hay resultados para su criterio de búsqueda" });
                }
            })
            .catch(function(error) {
                res.send(error);
            });
    },
    mostrarSearch: function(req, res) {
        let busqueda = req.query.search;
        if (busqueda == "") {
            return res.render("search-results", { productos: [], mensaje: "Por favor, ingrese un criterio de búsqueda"});
        }
        else {
        db.Product.findAll({ 
            where:  [{nombreProducto: {[op.like] : "%" + busqueda + "%"}}]
            })
            .then(function(productos){
                if (productos.length > 0) {
                    return res.render("search-results", {productos: productos});
                } else {
                    return res.render("search-results", {productos: [] , mensaje: "No hay resultados para su criterio de búsqueda"});
                }
            })
            .catch(function(error){
                res.render("search-results", {productos: [], mensaje: "Error al buscar producto"})
            })
        }
    },
    agregarProduct:function(req,res){
        if (!req.session.userLogged) {
        return res.redirect('/users/login')};

        let producto = {
                id_usuario :req.session.userLogged.id,
                fotoProducto: req.body.imgProducto,
                nombreProducto: req.body.nombreProd,
                descripcionProducto: req.body.descProd,
            }
            db.Product.create(producto)
            .then(function(productos){
                return res.redirect('/')
            })
            .catch(function(error){
                return res.send(error)
            })
    },
    agregarComentario: function(req, res){
        if (!req.session.userLogged) {
            return res.render('login', { error: 'Debes iniciar sesión para comentar.' });
        }

        let id_producto = req.params.id;
        let texto = req.body.texto;
        let id_usuario = req.session.userLogged.id;

        db.Comentario.create({
            id_producto: id_producto,
            id_usuario: id_usuario,
            texto: texto
        })
        .then(function() {
            db.Product.findByPk(id_producto, {
                include: [
                    {
                        association: 'comentarios', 
                        include: ['user']          
                    }
                ]
            })
            .then(function(productos) {
                res.render("product", { productos: productos, usuario: req.session.userLogged });
            })
            .catch(function(error) {
                res.send("Error al mostrar el producto actualizado");
            });
        })
        .catch(function(error) {
            res.send("Error al agregar comentario");
        });
    }
};

module.exports = controlador;