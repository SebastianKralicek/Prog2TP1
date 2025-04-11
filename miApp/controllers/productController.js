const data = require('../db/data')

const controlador = {
    mostrarProduct: function (req, res) {
        const producto = data.products[0]; 
        res.render("product", { producto });
    },
    mostrarProductAdd: function(req,res){
        return res.render('product-add',  {usuario: data.usuario})
    },
};

module.exports = controlador;