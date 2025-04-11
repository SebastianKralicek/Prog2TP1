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
updateAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deleteAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP 

);
CREATE TABLE Productos(
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
id_usuario INT UNSIGNED NOT NULL,
fotoProducto VARCHAR(255),
nombreProducto VARCHAR(100) NOT NULL,
descripcionProducto TEXT NOT NULL,
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updateAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deleteAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
FOREIGN KEY (id_usuario) REFERENCES usuarios(id)

);
CREATE TABLE Comentarios(
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
id_producto INT UNSIGNED NOT NULL,
id_usuario INT UNSIGNED NOT NULL,
texto VARCHAR(100) NOT NULL,
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updateAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deleteAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
FOREIGN KEY (id_producto) REFERENCES productos(id),
FOREIGN KEY (id_usuario) REFERENCES usuarios(id)
);


INSERT INTO Usuarios(email, contrasenia, fecha_nacimiento, dni, foto_perfil)VALUES
('cristianoRonaldo7@gmail.com', 'cr7bdoro', '1985-02-05', 29482046, 'e71eeea8ab7a8244e10da948f71870ec.jpg'),
('sebastianKral@mail.com', 'Seba2005', '2005-08-14', 46347852, 'images.jpg'),
('benjahaymes@icloud.com', 'BenjaminHaymes2005', '2005-08-16', 46024739, 'images2.jpg'),
('valenMeggio@mail.com', 'Meggiol@ro05valen', '2005-04-04', 46830029, 'images3.jpg'),
('messi@digitalhouse.com', '123456', '1987-06-24', 12345678, 'images4.jpg');

INSERT INTO Productos (id_usuario, fotoProducto, nombreProducto, descripcionProducto) VALUES
(1, '', 'Cafetera', 'Cafetera moulinex de capsula'),
(1, '', 'Macbook pro', 'Computadora Apple con garantia del ano 2019'),
(2, '', 'Samsung Galaxy S10', 'Nuevo celular con procesador mejorado y retina de vidrio, con 64gb'),
(2, '', 'TV', 'Tv samsung smart TV de 65 pulgadas'),
(3, '', 'Campera', 'Campera de jean'),
(3, '', 'Gorra', 'Gorra negra ajustable'),
(4, '', 'Short', 'Short deportivo azul'),
(4, '', 'Mochila', 'Mochila para notebook'),
(5, '', 'Botas', 'Botas de cuero marrón'),
(5, '', 'Guantes', 'Guantes de invierno térmicos');

INSERT INTO Comentarios (id_producto, id_usuario, texto) VALUES
(1, 2, 'Muy bueno!'), (1, 3, 'Me encantó'), (1, 4, 'Muy rico cafe!'),
(2, 1, 'No me gustó tanto, poco espacio'), (2, 3, 'Excelente calidad'), (2, 5, 'hermosa computadora'),
(3, 1, 'muy buen celular, funciona al 10'), (3, 4, 'procesador muy bueno'), (3, 5, 'Buen precio'),
(4, 2, 'Mejor compra que hice en la ultima decada'), (4, 3, 'termenda!'), (4, 5, 'Cuotas?'),
(5, 1, 'Buen producto'), (5, 2, 'Linda campera'), (5, 4, 'Perfecto'),
(6, 1, 'Ideal para el verano'), (6, 2, 'Me gustó'), (6, 5, 'Recomendado'),
(7, 2, 'Lindo diseño'), (7, 3, 'Cómodo y barato'), (7, 4, 'Cumple'),
(8, 1, 'Espaciosa'), (8, 3, 'Me sirve para la facu'), (8, 5, 'Buen tamaño'),
(9, 1, 'Muy lindas para salir'), (9, 2, 'Un poco ajustadas'), (9, 4, 'Excelente'),
(10, 2, 'Abrigados'), (10, 3, 'No transpiran'), (10, 5, 'Buen regalo');