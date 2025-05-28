const data = require('../db/data')
const db = require("../database/models")
const op = db.Sequelize.Op;

const controlador = {
    mostrarProduct: function (req, res) {
        const producto = data.products[3]; 
        res.render("product", { producto });
    },
    mostrarProductAdd: function(req,res){
        return res.render('product-add',  {usuario: data.usuarios})
    },
    mostrarProductID:function(req, res){


    },
    mostrarSearch: function(req, res) {
        let busqueda = req.query.search
        db.Product.findAll({ 
            where:  [{nombreProducto: {[op.like] : "%" + busqueda + "%"}}]
            })
            .then(function(productos){
                return res.render("search-results", {productos: productos})
            })
            .catch(function(error){
                res.render("search-results", {productos: [], mensaje: "Error al buscar producto"})
            })
    }
};

module.exports = controlador;