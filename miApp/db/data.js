const data = {
    usuarios:[
        {
            id: 1,
            nombre: "Lionel Messi",
            email: "messi@digitalhouse.com",
            contraseña: "123456",  
            fechaNacimiento: "1987-06-24",
            documento: 12345678,
            fotoPerfil: "/images/images/users/messi.jpeg"
        },
        {
            id: 2,
            nombre: "Crisitano Ronaldo",
            email: "cristianoRonaldo7@gmail.com",
            contraseña: "cr7bdoro",
            fechaNacimiento: "1985-02-05",
            documento: "29482046",
            fotoPerfil: "/images/images/users/cristianoR7.jpeg",
        },
        {
            id: 3,
            nombre: "Sebastian Kralicek",
            email: "sebastianKral@mail.com",
            contraseña: "Seba2005",
            fechaNacimiento: "2005-08-14",
            documento: "46347852",
            fotoPerfil: "/images/images/users/krali.jpeg",
        },
        {
            id: 4,
            nombre: "Benjamin Haymes",
            email: "benjahaymes@icloud.com",
            contraseña: "BenjaminHaymes2005",
            fechaNacimiento: "2005-08-16",
            documento: "46024739",
            fotoPerfil: "/images/images/users/benja.jpeg",
        },
        {
            id: 5,
            nombre: "Valentin Meggiolaro",
            email: "valenMeggio@mail.com",
            contraseña: "Meggiol@ro05valen",
            fechaNacimiento: "2005-04-04",
            documento: "46830029",
            fotoPerfil: "/images/images/users/valen.jpeg",
        },

    ], 
    
    products: [
        {
            id: 1,
            fotoProducto: "/images/images/products/appleVision.jpeg",
            nombreProducto: "Apple Vision",
            descripcionProducto: "Realidad virtual en tu casa! apple vision pro",
            comentarios:[
                {nombreUsuario:"Cristiano Ronaldo", texto:"Muy bueno", imgPerfilUsuario:"images/images/users/cristianoR7.jpeg"},
                {nombreUsuario:"Sebastian Kralicek", texto:"Me encanto", imgPerfilUsuario:"images/images/users/krali.jpeg"},
                {nombreUsuario:"Benjamin Haymes", texto:"Parece la vida real, pero estas en un juego!", imgPerfilUsuario:"images/images/users/benja.jpeg"}
            ]
        },
        {
            id: 2,
            fotoProducto: "/images/images/products/img-macbook-pro-2019.jpg",
            nombreProducto: "Macbook pro 2019",
            descripcionProducto: "Computadora Apple con garantia del ano 2019",
            comentarios:[
                {nombreUsuario:"Lionel Messi", texto:"No me gusto tanto, poco espacio", imgPerfilUsuario:"images/images/users/messi.jpeg"},
                {nombreUsuario:"Sebastian Kralicek", texto:"Excelente calidad", imgPerfilUsuario:"images/images/users/krali.jpeg"},
                {nombreUsuario:"Valentin Meggiolaro", texto:"hermosa computadora", imgPerfilUsuario:"images/images/users/valen.jpeg"}
            ]
        },
        {
            id: 3,
            fotoProducto: "/images/images/products/img-samsung-galaxy-s10.jpg",
            nombreProducto: "Samsung Galaxy S10",
            descripcionProducto: "Nuevo celular con procesador mejorado y retina de vidrio, con 64gb",
            comentarios:[
                {nombreUsuario:"Lionel Messi", texto:"Muy buen celular, funciona al 10", imgPerfilUsuario:"images/images/users/messi.jpeg"},
                {nombreUsuario:"Benjamin Haymes", texto:"procesador muy bueno", imgPerfilUsuario:"images/images/users/benja.jpeg"},
                {nombreUsuario:"Valentin Meggiolaro", texto:"buen precio", imgPerfilUsuario:"images/images/users/valen.jpeg"}
            ]
        },
        {
            id: 4,
            fotoProducto: "/images/images/products/img-tv-samsung-smart.jpg",
            nombreProducto: "TV samsung",
            descripcionProducto: "Tv samsung smart TV de 65 pulgadas",
            comentarios:[
                {nombreUsuario:"Cristiano Ronaldo", texto:"Mejor compra que hice en la ultima decada", imgPerfilUsuario:"images/images/users/cristianoR7.jpeg"},
                {nombreUsuario:"Sebastian Kralicek", texto:"tremenda!", imgPerfilUsuario:"images/images/users/krali.jpeg"},
                {nombreUsuario:"Valentin Meggiolaro", texto:"Cuotas?", imgPerfilUsuario:"images/images/users/valen.jpeg"}
            ]
        },
        {
            id: 5,
            fotoProducto: "/images/images/products/applewatch.jpeg",
            nombreProducto: "Apple watch",
            descripcionProducto: "reloj inteligente apple, ultimo modelo",
            comentarios:[
                { nombre: "Lionel Messi", texto: "Buen producto", imgPerfilUsuario: "images/images/users/messi.jpeg" },
                { nombre: "Cristiano Ronaldo", texto: "Lo llevo a todos lados", imgPerfilUsuario: "images/images/users/cristianoR7.jpeg" },
                { nombre: "Benjamin Haymes", texto: "Lo puedo combinar con todos mis outfits!", imgPerfilUsuario: "images/images/users/benja.jpeg" }
            ]
        },
        {
            id: 6,
            fotoProducto: "/images/images/products/cargador.jpeg",
            nombreProducto: "Cargador universal",
            descripcionProducto: "Cargador universal, funcion para cargar celulares samsung, contoles de PS y mucho mas!",
            comentarios:[
                { nombre: "Lionel Messi", texto: "Ideal para cualquier dispositivo", imgPerfilUsuario: "images/images/users/messi.jpeg" },
                { nombre: "Cristiano Ronaldo", texto: "Lo tengo hace mucho tiempo y sigue funcionando", imgPerfilUsuario: "images/images/users/cristianoR7.jpeg" },
                { nombre: "Valentin Meggiolaro", texto: "Recomendadisimo", imgPerfilUsuario: "images/images/users/valen.jpeg" }
            ]
        },
        {
            id: 7,
            fotoProducto: "/images/images/products/iphone.jpeg",
            nombreProducto: "Iphone 13",
            descripcionProducto: "SmartPhone ultima tecnologia refabrished",
            comentarios:[
                { nombre: "Cristiano Ronaldo", texto: "Lindo diseño", imgPerfilUsuario: "images/images/users/cristianoR7.jpeg" },
                { nombre: "Sebastian Kralicek", texto: "Muy barato", imgPerfilUsuario: "images/images/users/krali.jpeg" },
                { nombre: "Benjamin Haymes", texto: "Te puede durar mas de una decada!", imgPerfilUsuario: "images/images/users/benja.jpeg" }
            ]
        },
        {
            id: 8,
            fotoProducto: "/images/images/products/monitor.jpeg",
            nombreProducto: "Monitor LG",
            descripcionProducto: "Monitor 144hz especial para jugar videojuego",
            comentarios:[
                { nombre: "Lionel Messi", texto: "Muy buena resolucion", imgPerfilUsuario: "images/images/users/messi.jpeg" },
                { nombre: "Sebastian Kralicek", texto: "Me sirve para la facu", imgPerfilUsuario: "images/images/users/krali.jpeg" },
                { nombre: "Valentin Meggiolaro", texto: "Buen tamaño", imgPerfilUsuario: "images/images/users/valen.jpeg" }
            ]
        },
        {
            id: 9,
            fotoProducto: "/images/images/products/pc.jpeg",
            nombreProducto: "PC",
            descripcionProducto: "Computadora de ultima generacion con los mejores componentes!",
            comentarios:[
                { nombre: "Lionel Messi", texto: "Muy lindo diseño", imgPerfilUsuario: "images/images/users/messi.jpeg" },
                { nombre: "Cristiano Ronaldo", texto: "Muy buena memoria RAM", imgPerfilUsuario: "images/images/users/cristianoR7.jpeg" },
                { nombre: "Benjamin Haymes", texto: "Excelente", imgPerfilUsuario: "images/images/users/benja.jpeg" }
            ]
        },
        {
            id: 10,
            fotoProducto: "/images/images/products/teclado.jpeg",
            nombreProducto: "Teclado gamer",
            descripcionProducto: "Teclado gamer con teclas muy rapidas, sensibles y buenas",
            comentarios:[
                { nombre: "Cristiano Ronaldo", texto: "Le podes cambiar los coloers cuando quieras!", imgPerfilUsuario: "images/images/users/cristianoR7.jpeg" },
                { nombre: "Sebastian Kralicek", texto: "Muy duradero", imgPerfilUsuario: "images/images/users/krali.jpeg" },
                { nombre: "Valentin Meggiolaro", texto: "Se lo regale a mi hijo y le encanto!", imgPerfilUsuario: "images/images/users/valen.jpeg" }
            ]
        },
    
    ]  

};

module.exports = data