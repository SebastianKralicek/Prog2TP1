module.exports = function(sequelize, dataTypes){

    let alias = 'Comentario'; 

    let cols = {
        id:{
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER.UNSINGED,
        },
        id_producto:{
            type: dataTypes.INTEGER.UNSINGED
        },
        id_usuario:{
            type: dataTypes.INTEGER.UNSINGED,
        },
        texto:{
            type: dataTypes.STRING(100),
        },
        createdAt:{
            type: dataTypes.DATE
        },
        updatedAt:{
            type: dataTypes.DATE
        },
        deletedAt: {
            type: dataTypes.DATE,

        },
    }

    let config = {
        tableName : "comentarios",
        timestamps: true, 
        underscored: true,
    }

   const Comentario = sequelize.define(alias, cols, config);
    Comentario.associate = function(models){
        Comentario.belongsTo(models.User,{
            as:"user",
            otherKey:"id_usuarios",
        }),
        Comentario.belongsTo(models.Product,{
            as:"products",
            foreignKey:"id_producto"
        })

    }

   return Comentario;
}