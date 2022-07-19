use otmaster;

/* para quitar error de uso de contraseña */
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'toor';
flush privileges;

/* añadir datos de clientes*/
INSERT INTO `otmaster`.`clientes`
(`rut_cliente`,`nombre_cliente`,`appat_cliente`,`apmat_cliente`,`correo_cliente`,`tel_cliente`)
VALUES
('11222333-6','John','Doe','Dao','example@example.cl',911223344);

SELECT 
"Dispositivo"."id_dispositivo", 
"Dispositivo"."num_serie_dispositivo", 
"Dispositivo"."modelo", 
"Dispositivo"."marcas_dispositivos_id_marcas" AS "marcasDispositivosIdMarcas", 
"Dispositivo"."tipos_dispositivos_id_tipos" AS "tiposDispositivosIdTipos", 
"Dispositivo"."created_at" AS "createdAt", 
"Dispositivo"."updated_at" AS "updatedAt", 
"Dispositivo"."marcasIdMarca", 
"Dispositivo"."tiposIdTipo", 
"marcas"."id_marca" AS "marcas.id_marca", 
"marcas"."nombre_marca" AS "marcas.nombre_marca", 
"marcas"."created_at" AS "marcas.createdAt", 
"marcas"."updated_at" AS "marcas.updatedAt", 
"tipos"."id_tipo" AS "tipos.id_tipo", 
"tipos"."nombre_tipo" AS "tipos.nombre_tipo", 
"tipos"."created_at" AS "tipos.createdAt", 
"tipos"."updated_at" AS "tipos.updatedAt" FROM "dispositivos" AS "Dispositivo" 
LEFT OUTER JOIN "marcas_dispositivos" AS "marcas" ON "Dispositivo"."marcasIdMarca" = "marcas"."id_marca" 
LEFT OUTER JOIN "tipos_dispositivos" AS "tipos" ON "Dispositivo"."tiposIdTipo" = "tipos"."id_tipo";   

