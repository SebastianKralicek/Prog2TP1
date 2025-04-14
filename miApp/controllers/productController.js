const data = require('../db/data')

const controlador = {
    mostrarProduct: function (req, res) {
        const producto = data.products[3]; 
        res.render("product", { producto });
    },
    mostrarProductAdd: function(req,res){
        return res.render('product-add',  {usuario: data.usuarios})
    },
    mostrarSearch: function(req,res){
        const producto = data.products[3];
        return res.render('search-results', { producto });
    }, 
};

module.exports = controlador;