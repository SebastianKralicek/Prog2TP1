const data = require('../db/data')
const db = require("../database/models")
const op = db.Sequelize.Op;

const controlador = {
    mostrarProduct: function (req, res) {
        const productos = data.products[3]; 
        res.render("product", { productos });
    },
    mostrarProductAdd: function(req,res){
        return res.render('product-add',  {usuario: data.usuarios})
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
    }
};

module.exports = controlador;