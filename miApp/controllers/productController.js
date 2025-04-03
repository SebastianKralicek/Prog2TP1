const controlador = {
    mostrarProduct: function(req,res){
        return res.render('product')
    },
    mostrarProductAdd: function(req,res){
        return res.render('product-add')
    },
};

module.exports = controlador;