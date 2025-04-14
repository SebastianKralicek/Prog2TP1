const data = require('../db/data')

const controlador = {
    TodosProds: function(req, res){
        const productos = data.products;
        res.render("index", {productos});
    }


};
module.exports = controlador;