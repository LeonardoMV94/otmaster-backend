use otmaster;

/* para quitar error de uso de contraseña */
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'toor';
flush privileges;

/* añadir datos de clientes*/
INSERT INTO `otmaster`.`clientes`
(`rut_cliente`,`nombre_cliente`,`appat_cliente`,`apmat_cliente`,`correo_cliente`,`tel_cliente`)
VALUES
('11222333-6','John','Doe','Dao','example@example.cl',911223344);
