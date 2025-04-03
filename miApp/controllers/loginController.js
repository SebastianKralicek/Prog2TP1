const controlador = {
    mostrarLogin: function(req,res){
        return res.render('login')
    },
    procesoLogin: function (req, res) {
        let userName = req.body.userName;
        res.render('profile', {userName: userName });
      }
};

module.exports = controlador;