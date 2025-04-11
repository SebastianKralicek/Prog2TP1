const data = {
    usuarios:[
        {
            nombre: "Lionel Messi",
            email: "messi@digitalhouse.com",
            contraseña: "123456",  
            fechaNacimiento: "1987-06-24",
            documento: 12345678,
            fotoPerfil: "images/images/users/messi.jpeg"
        },
        {
            nombre: "Crisitano Ronaldo",
            email: "cristianoRonaldo7@gmail.com",
            contraseña: "cr7bdoro",
            fechaNacimiento: "1985-02-05",
            documento: "29482046",
            fotoPerfil: "images/images/users/cristianoR7.jpeg",
        },
        {
            nombre: "Sebastian Kralicek",
            email: "sebastianKral@mail.com",
            contraseña: "Seba2005",
            fechaNacimiento: "2005-08-14",
            documento: "46347852",
            fotoPerfil: "images/images/users/krali.jpeg",
        },
        {
            nombre: "Benjamin Haymes",
            email: "benjahaymes@icloud.com",
            contraseña: "BenjaminHaymes2005",
            fechaNacimiento: "2005-08-16",
            documento: "46024739",
            fotoPerfil: "images/images/users/benja.jpeg",
        },
        {
            nombre: "Valentin Meggiolaro",
            email: "valenMeggio@mail.com",
            contraseña: "Meggiol@ro05valen",
            fechaNacimiento: "2005-04-04",
            documento: "46830029",
            fotoPerfil: "images/images/users/valen.jpeg",
        },

    ], 
    
    products: [
        {
            fotoProducto: "images/images/products/img-cafetera-moulinex.jpg",
            nombreProducto: "Cafetera",
            descripcionProducto: "Cafetera moulinex de capsula",
            comentarios:[
                {nombreUsuario:"Cristiano Ronaldo", texto:"Muy bueno", imgPerfilUsuario:"images/images/users/cristianoR7.jpeg"},
                {nombreUsuario:"Sebastian Kralicek", texto:"Me encanto", imgPerfilUsuario:"images/images/users/krali.jpeg"},
                {nombreUsuario:"Benjamin Haymes", texto:"Muy rico cafe", imgPerfilUsuario:"images/images/users/benja.jpeg"}
            ]
        },
        {
            fotoProducto: "images/images/products/img-macbook-pro-2019.jpg",
            nombreProducto: "Macbook pro",
            descripcionProducto: "Computadora Apple con garantia del ano 2019",
            comentarios:[
                {nombreUsuario:"Lionel Messi", texto:"No me gusto tanto, poco espacio", imgPerfilUsuario:"images/images/users/messi.jpeg"},
                {nombreUsuario:"Sebastian Kralicek", texto:"Excelente calidad", imgPerfilUsuario:"images/images/users/krali.jpeg"},
                {nombreUsuario:"Valentin Meggiolaro", texto:"hermosa computadora", imgPerfilUsuario:"images/images/users/valen.jpeg"}
            ]
        },
        {
            fotoProducto: "images/images/products/img-samsung-galaxy-s10.jpg",
            nombreProducto: "Samsung Galaxy S10",
            descripcionProducto: "Nuevo celular con procesador mejorado y retina de vidrio, con 64gb",
            comentarios:[
                {nombreUsuario:"Lionel Messi", texto:"Muy buen celular, funciona al 10", imgPerfilUsuario:"images/images/users/messi.jpeg"},
                {nombreUsuario:"Benjamin Haymes", texto:"procesador muy bueno", imgPerfilUsuario:"images/images/users/benja.jpeg"},
                {nombreUsuario:"Valentin Meggiolaro", texto:"buen precio", imgPerfilUsuario:"images/images/users/valen.jpeg"}
            ]
        },
        {
            fotoProducto: "images/images/products/img-tv-samsung-smart.jpg",
            nombreProducto: "TV",
            descripcionProducto: "Tv samsung smart TV de 65 pulgadas",
            comentarios:[
                {nombreUsuario:"Cristiano Ronaldo", texto:"Mejor compra que hice en la ultima decada", imgPerfilUsuario:"images/images/users/cristianoR7.jpeg"},
                {nombreUsuario:"Sebastian Kralicek", texto:"tremenda!", imgPerfilUsuario:"images/images/users/krali.jpeg"},
                {nombreUsuario:"Valentin Meggiolaro", texto:"Cuotas?", imgPerfilUsuario:"images/images/users/valen.jpeg"}
            ]
        },
        {
            fotoProducto: "images/images/products/campera-jean.jpeg",
            nombreProducto: "Campera",
            descripcionProducto: "Campera de jean",
            comentarios:[
                { nombre: "Lionel Messi", texto: "Buen producto", imgPerfilUsuario: "images/images/users/messi.jpeg" },
                { nombre: "Cristiano Ronaldo", texto: "Linda campera", imgPerfilUsuario: "images/images/users/cristianoR7.jpeg" },
                { nombre: "Benjamin Haymes", texto: "Perfecto", imgPerfilUsuario: "images/images/users/benja.jpeg" }
            ]
        },
        {
            fotoProducto: "images/images/products/gorra-negra.jpeg",
            nombreProducto: "Gorra",
            descripcionProducto: "Gorra negra ajustable",
            comentarios:[
                { nombre: "Lionel Messi", texto: "Ideal para el verano", imgPerfilUsuario: "images/images/users/messi.jpeg" },
                { nombre: "Cristiano Ronaldo", texto: "Me gustó", imgPerfilUsuario: "images/images/users/cristianoR7.jpeg" },
                { nombre: "Valentin Meggiolaro", texto: "Recomendado", imgPerfilUsuario: "images/images/users/valen.jpeg" }
            ]
        },
        {
            fotoProducto: "imagesimages/products//shora-deportivo-azul.jpeg",
            nombreProducto: "Short",
            descripcionProducto: "Short deportivo azul",
            comentarios:[
                { nombre: "Cristiano Ronaldo", texto: "Lindo diseño", imgPerfilUsuario: "images/images/users/cristianoR7.jpeg" },
                { nombre: "Sebastian Kralicek", texto: "Cómodo y barato", imgPerfilUsuario: "images/images/users/krali.jpeg" },
                { nombre: "Benjamin Haymes", texto: "Cumple", imgPerfilUsuario: "images/images/users/benja.jpeg" }
            ]
        },
        {
            fotoProducto: "images/images/products/mochila.jpeg",
            nombreProducto: "Mochila",
            descripcionProducto: "Mochila para notebook",
            comentarios:[
                { nombre: "Lionel Messi", texto: "Espaciosa", imgPerfilUsuario: "images/images/users/messi.jpeg" },
                { nombre: "Sebastian Kralicek", texto: "Me sirve para la facu", imgPerfilUsuario: "images/images/users/krali.jpeg" },
                { nombre: "Valentin Meggiolaro", texto: "Buen tamaño", imgPerfilUsuario: "images/images/users/valen.jpeg" }
            ]
        },
        {
            fotoProducto: "images/images/products/botas-cuero-marron.jpeg",
            nombreProducto: "Botas",
            descripcionProducto: "Botas de cuero marrón",
            comentarios:[
                { nombre: "Lionel Messi", texto: "Muy lindas para salir", imgPerfilUsuario: "images/images/users/messi.jpeg" },
                { nombre: "Cristiano Ronaldo", texto: "Un poco ajustadas", imgPerfilUsuario: "images/images/users/cristianoR7.jpeg" },
                { nombre: "Benjamin Haymes", texto: "Excelente", imgPerfilUsuario: "images/images/users/benja.jpeg" }
            ]
        },
        {
            fotoProducto: "images/images/products/guantes-termicos.jpeg",
            nombreProducto: "Guantes",
            descripcionProducto: "Guantes de invierno térmicos",
            comentarios:[
                { nombre: "Cristiano Ronaldo", texto: "Abrigados", imgPerfilUsuario: "images/images/users/cristianoR7.jpeg" },
                { nombre: "Sebastian Kralicek", texto: "No transpiran", imgPerfilUsuario: "images/images/users/krali.jpeg" },
                { nombre: "Valentin Meggiolaro", texto: "Buen regalo", imgPerfilUsuario: "images/images/users/valen.jpeg" }
            ]
        },
    
    ]  

};

module.exports = data