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


SELECT 
"Ticket"."id_ticket", 
"Ticket"."problema_ticket", 
"Ticket"."diagnostico_ticket", 
"Ticket"."resolucion_ticket", 
"Ticket"."estado_ticket", 
"Ticket"."dispositivos_id_dispositivo" AS "dispositivosIdDispositivo", 
"Ticket"."clientes_rut_cliente" AS "clientesRutCliente", 
"Ticket"."colaboradores_rut_colaborador" AS "colaboradoresRutColaborador", 
"Ticket"."created_at" AS "createdAt", 
"Ticket"."updated_at" AS "updatedAt", 
"clientes"."rut_cliente" AS "clientes.rut_cliente", 
"clientes"."nombre_cliente" AS "clientes.nombre_cliente", 
"clientes"."apmat_cliente" AS "clientes.apmat_cliente", 
"clientes"."appat_cliente" AS "clientes.appat_cliente", 
"clientes"."correo_cliente" AS "clientes.correo_cliente", 
"clientes"."tel_cliente" AS "clientes.tel_cliente", 
"clientes"."created_at" AS "clientes.createdAt", 
"clientes"."updated_at" AS "clientes.updatedAt", 
"colaboradores"."rut_colaborador" AS "colaboradores.rut_colaborador", 
"colaboradores"."password_colaborador" AS "colaboradores.password_colaborador", 
"colaboradores"."nombre_colaborador" AS "colaboradores.nombre_colaborador", 
"colaboradores"."apmat_colaborador" AS "colaboradores.apmat_colaborador", 
"colaboradores"."appat_colaborador" AS "colaboradores.appat_colaborador", 
"colaboradores"."roles_id_rol" AS "colaboradores.rolesIdRol", 
"colaboradores"."created_at" AS "colaboradores.createdAt", 
"colaboradores"."updated_at" AS "colaboradores.updatedAt", 
"dispositivos"."id_dispositivo" AS "dispositivos.id_dispositivo", 
"dispositivos"."num_serie_dispositivo" AS "dispositivos.num_serie_dispositivo", 
"dispositivos"."modelo" AS "dispositivos.modelo", 
"dispositivos"."marcas_dispositivos_id_marcas" AS "dispositivos.marcasDispositivosIdMarcas", 
"dispositivos"."tipos_dispositivos_id_tipos" AS "dispositivos.tiposDispositivosIdTipos", 
"dispositivos"."created_at" AS "dispositivos.createdAt", 
"dispositivos"."updated_at" AS "dispositivos.updatedAt", 
"items"."id_repuesto" AS "items.id_repuesto", 
"items"."repuesto" AS "items.repuesto", 
"items"."created_at" AS "items.createdAt", 
"items"."updated_at" AS "items.updatedAt", 
"items->RepuestosTicket"."createdAt" AS "items.RepuestosTicket.createdAt", 
"items->RepuestosTicket"."updatedAt" AS "items.RepuestosTicket.updatedAt", 
"items->RepuestosTicket"."RepuestoIdRepuesto" AS "items.RepuestosTicket.RepuestoIdRepuesto", 
"items->RepuestosTicket"."TicketIdTicket" AS "items.RepuestosTicket.TicketIdTicket" FROM "tickets" AS "Ticket" 
LEFT OUTER JOIN "clientes" AS "clientes" ON "Ticket"."clientes_rut_cliente" = "clientes"."rut_cliente" 
LEFT OUTER JOIN "colaboradores" AS "colaboradores" ON "Ticket"."colaboradores_rut_colaborador" = "colaboradores"."rut_colaborador" 
LEFT OUTER JOIN "dispositivos" AS "dispositivos" ON "Ticket"."dispositivos_id_dispositivo" = "dispositivos"."id_dispositivo" 
LEFT OUTER JOIN ( "RepuestosTicket" AS "items->RepuestosTicket" 
INNER JOIN "repuestos" AS "items" ON "items"."id_repuesto" = "items->RepuestosTicket"."RepuestoIdRepuesto") 
ON "Ticket"."id_ticket" = "items->RepuestosTicket"."TicketIdTicket" 
WHERE "Ticket"."id_ticket" = '5';


SELECT 
"Ticket"."id_ticket", 
"Ticket"."problema_ticket", 
"Ticket"."diagnostico_ticket", 
"Ticket"."resolucion_ticket", 
"Ticket"."estado_ticket", 
"Ticket"."dispositivos_id_dispositivo" AS "dispositivosIdDispositivo", 
"Ticket"."clientes_rut_cliente" AS "clientesRutCliente", 
"Ticket"."colaboradores_rut_colaborador" AS "colaboradoresRutColaborador", 
"Ticket"."created_at" AS "createdAt", 
"Ticket"."updated_at" AS "updatedAt", 
"clientes"."rut_cliente" AS "clientes.rut_cliente", 
"clientes"."nombre_cliente" AS "clientes.nombre_cliente", 
"clientes"."apmat_cliente" AS "clientes.apmat_cliente", 
"clientes"."appat_cliente" AS "clientes.appat_cliente", 
"clientes"."correo_cliente" AS "clientes.correo_cliente", 
"clientes"."tel_cliente" AS "clientes.tel_cliente", 
"clientes"."created_at" AS "clientes.createdAt", 
"clientes"."updated_at" AS "clientes.updatedAt", 
"colaboradores"."rut_colaborador" AS "colaboradores.rut_colaborador", 
"colaboradores"."password_colaborador" AS "colaboradores.password_colaborador", 
"colaboradores"."nombre_colaborador" AS "colaboradores.nombre_colaborador", 
"colaboradores"."apmat_colaborador" AS "colaboradores.apmat_colaborador", 
"colaboradores"."appat_colaborador" AS "colaboradores.appat_colaborador", 
"colaboradores"."roles_id_rol" AS "colaboradores.rolesIdRol", 
"colaboradores"."created_at" AS "colaboradores.createdAt", 
"colaboradores"."updated_at" AS "colaboradores.updatedAt", 
"dispositivos"."id_dispositivo" AS "dispositivos.id_dispositivo", 
"dispositivos"."num_serie_dispositivo" AS "dispositivos.num_serie_dispositivo", 
"dispositivos"."modelo" AS "dispositivos.modelo", 
"dispositivos"."marcas_dispositivos_id_marcas" AS "dispositivos.marcasDispositivosIdMarcas", 
"dispositivos"."tipos_dispositivos_id_tipos" AS "dispositivos.tiposDispositivosIdTipos", 
"dispositivos"."created_at" AS "dispositivos.createdAt", 
"dispositivos"."updated_at" AS "dispositivos.updatedAt",
 "items"."id_repuesto" AS "items.id_repuesto", 
 "items"."repuesto" AS "items.repuesto", 
 "items"."created_at" AS "items.createdAt", 
 "items"."updated_at" AS "items.updatedAt", 
 "items->repuestos_ticket"."repuestos_id_repuesto" AS "items.repuestos_ticket.repuestosIdRepuesto", 
 "items->repuestos_ticket"."tickets_id_ticket" AS "items.repuestos_ticket.ticketsIdTicket", 
 "items->repuestos_ticket"."created_at" AS "items.repuestos_ticket.createdAt", 
 "items->repuestos_ticket"."updated_at" AS "items.repuestos_ticket.updatedAt" 
 FROM "tickets" AS "Ticket" 
 LEFT OUTER JOIN "clientes" AS "clientes" 
    ON "Ticket"."clientes_rut_cliente" = "clientes"."rut_cliente" 
 LEFT OUTER JOIN "colaboradores" AS "colaboradores" 
    ON "Ticket"."colaboradores_rut_colaborador" = "colaboradores"."rut_colaborador" 
 LEFT OUTER JOIN "dispositivos" AS "dispositivos" 
    ON "Ticket"."dispositivos_id_dispositivo" = "dispositivos"."id_dispositivo" 
LEFT OUTER JOIN ( 
    "repuestos_ticket" AS "items->repuestos_ticket" 
    INNER JOIN "repuestos" AS "items" ON "items"."id_repuesto" = "items->repuestos_ticket"."tickets_id_ticket") 
    ON "Ticket"."id_ticket" = "items->repuestos_ticket"."repuestos_id_repuesto" WHERE "Ticket"."id_ticket" = '5';

