const data = require('../db/data')
const db = require('../database/models')


const controlador = {
    TodosProds: function(req, res) {
        db.Product.findAll({
            include: [{
                model: db.User,
                as: "user"
            }]
        }) 
        .then(function(productos) {
            res.render("index", { productos });
        })
        .catch(function(error) {
            res.send("Error al cargar productos");
        });
    }
};

module.exports = controlador;