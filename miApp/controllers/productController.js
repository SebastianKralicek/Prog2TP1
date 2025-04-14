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
        return res.render('search-results')
    }, 
    /*mostrarProductID: function(req, res){
        let id = req.params.id;
        let productoFiltrar = [];
        for (let i=0; i < data.products.length; i++){
            if (data.products[i].id == id){
                productoFiltrar.push(data.products[i])
            }
        }
        if (productoFiltrar.length > 0){
            return res.send(productoFiltrar)
        } else {
            return res.send("no existe producto con tal id")
        }
    }*/
};

module.exports = controlador;