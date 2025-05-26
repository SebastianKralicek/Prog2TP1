module.exports = function(sequelize, dataTypes){

    let alias = 'Product'; 

    let cols = {
        id:{
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER.UNSINGED,
        },
        id_usuario:{
            type: dataTypes.INTEGER.UNSINGED,
        },
        fotoProducto:{
            type: dataTypes.STRING,
        },
        nombreProducto:{
            type: dataTypes.STRING(100),
        },
        descripcionProducto:{
            type: dataTypes.TEXT,
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
        tableName : "productos",
        timestamps: true, 
        underscored: true,
    }

   const Product = sequelize.define(alias, cols, config);
    Product.associate = function(models){
        Product.belongsTo(models.User,{
            as:"user",
            foreignKey: "id_usuario"
        })
        Product.hasMany(models.Comentario,{
            as:"comentarios",
            foreignKey:"id_producto"
        })
        

    }

   return Product;
}