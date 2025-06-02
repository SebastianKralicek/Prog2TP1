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
            include: [{ model: db.Comentario }]
        })
            .then(function(productos) {
                if (productos) {
                    res.render("product", { productos: productos });
                } else {
                    res.render("product", { productos: [], mensaje: "No hay resultados para su criterio de búsqueda" });
                }
            })
            .catch(function(error) {
                res.render("product", { productos: [], mensaje: "Error al buscar el producto" });
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
        
    }
};

module.exports = controlador;