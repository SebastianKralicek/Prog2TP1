CREATE SCHEMA TrabajoPractico;

USE TrabajoPractico;

CREATE TABLE Usuarios (
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
email VARCHAR(100) NOT NULL UNIQUE,
contrasenia VARCHAR(255) NOT NULL,
fecha_nacimiento DATE NOT NULL,
dni INT NOT NULL UNIQUE,
foto_perfil VARCHAR(255),
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP 

);
CREATE TABLE Productos(
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
id_usuario INT UNSIGNED NOT NULL,
fotoProducto VARCHAR(255),
nombreProducto VARCHAR(100) NOT NULL,
descripcionProducto TEXT NOT NULL,
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
FOREIGN KEY (id_usuario) REFERENCES usuarios(id)

);
CREATE TABLE Comentarios(
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
id_producto INT UNSIGNED NOT NULL,
id_usuario INT UNSIGNED NOT NULL,
texto VARCHAR(100) NOT NULL,
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
FOREIGN KEY (id_producto) REFERENCES productos(id),
FOREIGN KEY (id_usuario) REFERENCES usuarios(id)
);


INSERT INTO Usuarios(email, contrasenia, fecha_nacimiento, dni, foto_perfil)VALUES
('cristianoRonaldo7@gmail.com', 'cr7bdoro', '1985-02-05', 29482046, '/images/images/users/cristianoR7.jpeg'),
('sebastianKral@mail.com', 'Seba2005', '2005-08-14', 46347852, '/images/images/users/krali.jpeg'),
('benjahaymes@icloud.com', 'BenjaminHaymes2005', '2005-08-16', 46024739, '/images/images/users/benja.jpeg'),
('valenMeggio@mail.com', 'Meggiol@ro05valen', '2005-04-04', 46830029, '/images/images/users/valen.jpeg'),
('messi@digitalhouse.com', '123456', '1987-06-24', 12345678, '/images/images/users/messi.jpeg');

INSERT INTO Productos (id_usuario, fotoProducto, nombreProducto, descripcionProducto) VALUES
(1, '/images/images/products/appleVision.jpeg', 'Apple Vision', 'Realidad virtual en tu casa! apple vision pro'),
(1, '/images/images/products/img-macbook-pro-2019.jpg', 'Macbook pro', 'Computadora Apple con garantia del ano 2019'),
(2, '/images/images/products/img-samsung-galaxy-s10.jpg', 'Samsung Galaxy S10', 'Nuevo celular con procesador mejorado y retina de vidrio, con 64gb'),
(2, '/images/images/products/img-tv-samsung-smart.jpg', 'TV', 'Tv samsung smart TV de 65 pulgadas'),
(3, '/images/images/products/applewatch.jpeg', 'Apple watch', 'reloj inteligente apple, ultimo modelo'),
(3, '/images/images/products/cargador.jpeg', 'Cargador universal', 'Cargador universal, funcion para cargar celulares samsung, contoles de PS y mucho mas!'),
(4, '/images/images/products/iphone.jpeg', 'Iphone 13', 'SmartPhone ultima tecnologia refabrished'),
(4, '/images/images/products/monitor.jpeg', 'Monitor LG', 'Monitor 144hz especial para jugar videojuego'),
(5, '/images/images/products/pc.jpeg', 'PC', 'Computadora de ultima generacion con los mejores componentes!'),
(5, '/images/images/products/teclado.jpeg', 'Teclado gamer', 'Teclado gamer con teclas muy rapidas, sensibles y buenas');

INSERT INTO Comentarios (id_producto, id_usuario, texto) VALUES
(1, 2, 'Muy bueno!'), (1, 3, 'Me encantó'), (1, 4, 'Parece la vida real, pero estas en un juego!'),
(2, 1, 'No me gustó tanto, poco espacio'), (2, 3, 'Excelente calidad'), (2, 5, 'hermosa computadora'),
(3, 1, 'muy buen celular, funciona al 10'), (3, 4, 'procesador muy bueno'), (3, 5, 'Buen precio'),
(4, 2, 'Mejor compra que hice en la ultima decada'), (4, 3, 'termenda!'), (4, 5, 'Cuotas?'),
(5, 1, 'Buen producto'), (5, 2, 'Lo llevo a todos lados'), (5, 4, 'Lo puedo combinar con mis outfits'),
(6, 1, 'Ideal para cualquier dispositivo'), (6, 2, 'Lo tengo hace mucho tiempo y sigue funcionando'), (6, 5, 'Recomendadisimo'),
(7, 2, 'Lindo diseño'), (7, 3, 'Muy barato'), (7, 4, 'Te puede durar mas de una decada!'),
(8, 1, 'Muy buena resolucion'), (8, 3, 'Me sirve para la facu'), (8, 5, 'Buen tamaño'),
(9, 1, 'Muy lindo diseño'), (9, 2, 'Muy buena memoria RAM'), (9, 4, 'Excelente'),
(10, 2, 'Le podes cambiar los colores cuando quieras!'), (10, 3, 'Muy duradero'), (10, 5, 'Se lo regale a mi hijo y le encanto!');