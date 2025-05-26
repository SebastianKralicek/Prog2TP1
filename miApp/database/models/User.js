module.exports = function (sequelize, dataTypes){
    let alias = 'User'; //Este alias se busca como nombre en de la tabla en plural dentro de la base de datos.

    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        email: {
            type: dataTypes.STRING
        },
        contrasenia: {
            type: dataTypes.STRING
        },
        fecha_nacimiento:{
            type: dataTypes.DATE
        },
        dni:{
            type: dataTypes.INTEGER
        },
        foto_perfil: {
            type: dataTypes.STRING
        },
         created_at : {
            type: dataTypes.DATE,
        },
        updated_at: {
            type: dataTypes.DATE,
        },
        delated_at: {
            type: dataTypes.DATE,
        },
        
    }

    let config = {
        tableName : "Usuarios",
        timestamps:true,
        underscored: true,
    };

    const User = sequelize.define(alias, cols, config);
     User.associate = function(models){
        User.hasMany(models.Product,{
            as:"products",
            foreignKey: "id_usuario"
        }),
        User.hasMany(models.Comentario,{
            as:"comentarios",
            otherKey:"id_usuarios",
        })

    }
    
    return User;
}