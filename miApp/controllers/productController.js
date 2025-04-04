const data = require('../db/data')

const controlador = {
    mostrarProduct: function(req,res){
        return res.render('product')
    },
    mostrarProductAdd: function(req,res){
        return res.render('product-add',  {usuario: data.usuario})
    },
};

module.exports = controlador;