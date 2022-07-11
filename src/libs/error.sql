
Sequelize CLI [Node: 16.16.0, CLI: 6.4.1, ORM: 6.20.0]

Loaded configuration file "src/db/config.cjs".
Using environment "development".
Executing (default): SELECT 1+1 AS result
Executing (default): SELECT table_name FROM information_schema.tables WHERE table_schema = 'public' AND table_type LIKE '%TABLE' AND table_name != 'spatial_ref_sys';
Executing (default): SELECT pk.constraint_type as "Constraint",c.column_name as "Field", c.column_default as "Default",c.is_nullable as "Null", (CASE WHEN c.udt_name = 'hstore' THEN c.udt_name ELSE c.data_type END) || (CASE WHEN c.character_maximum_length IS NOT NULL THEN '(' || c.character_maximum_length || ')' ELSE '' END) as "Type", (SELECT array_agg(e.enumlabel) FROM pg_catalog.pg_type t JOIN pg_catalog.pg_enum e ON t.oid=e.enumtypid WHERE t.typname=c.udt_name) AS "special", (SELECT pgd.description FROM pg_catalog.pg_statio_all_tables AS st INNER JOIN pg_catalog.pg_description pgd on (pgd.objoid=st.relid) WHERE c.ordinal_position=pgd.objsubid AND c.table_name=st.relname) AS "Comment" FROM information_schema.columns c LEFT JOIN (SELECT tc.table_schema, tc.table_name, cu.column_name, tc.constraint_type FROM information_schema.TABLE_CONSTRAINTS tc JOIN information_schema.KEY_COLUMN_USAGE  cu ON tc.table_schema=cu.table_schema and tc.table_name=cu.table_name and tc.constraint_name=cu.constraint_name and tc.constraint_type='PRIMARY KEY') pk ON pk.table_schema=c.table_schema AND pk.table_name=c.table_name AND pk.column_name=c.column_name WHERE c.table_name = 'SequelizeMeta' AND c.table_schema = 'public'
Executing (default): SELECT table_name FROM information_schema.tables WHERE table_schema = 'public' AND table_name = 'SequelizeMeta'
Executing (default): SELECT i.relname AS name, ix.indisprimary AS primary, ix.indisunique AS unique, ix.indkey AS indkey, array_agg(a.attnum) as column_indexes, array_agg(a.attname) AS column_names, pg_get_indexdef(ix.indexrelid) AS definition FROM pg_class t, pg_class i, pg_index ix, pg_attribute a WHERE t.oid = ix.indrelid AND i.oid = ix.indexrelid AND a.attrelid = t.oid AND t.relkind = 'r' and t.relname = 'SequelizeMeta' GROUP BY i.relname, ix.indexrelid, ix.indisprimary, ix.indisunique, ix.indkey ORDER BY i.relname;
Executing (default): SELECT "name" FROM "SequelizeMeta" AS "SequelizeMeta" ORDER BY "SequelizeMeta"."name" ASC;
Executing (default): SELECT table_name FROM information_schema.tables WHERE table_schema = 'public' AND table_name = 'SequelizeMeta'
Executing (default): SELECT i.relname AS name, ix.indisprimary AS primary, ix.indisunique AS unique, ix.indkey AS indkey, array_agg(a.attnum) as column_indexes, array_agg(a.attname) AS column_names, pg_get_indexdef(ix.indexrelid) AS definition FROM pg_class t, pg_class i, pg_index ix, pg_attribute a WHERE t.oid = ix.indrelid AND i.oid = ix.indexrelid AND a.attrelid = t.oid AND t.relkind = 'r' and t.relname = 'SequelizeMeta' GROUP BY i.relname, ix.indexrelid, ix.indisprimary, ix.indisunique, ix.indkey ORDER BY i.relname;
Executing (default): SELECT "name" FROM "SequelizeMeta" AS "SequelizeMeta" ORDER BY "SequelizeMeta"."name" ASC;
Executing (default): SELECT table_name FROM information_schema.tables WHERE table_schema = 'public' AND table_name = 'SequelizeMeta'
Executing (default): SELECT i.relname AS name, ix.indisprimary AS primary, ix.indisunique AS unique, ix.indkey AS indkey, array_agg(a.attnum) as column_indexes, array_agg(a.attname) AS column_names, pg_get_indexdef(ix.indexrelid) AS definition FROM pg_class t, pg_class i, pg_index ix, pg_attribute a WHERE t.oid = ix.indrelid AND i.oid = ix.indexrelid AND a.attrelid = t.oid AND t.relkind = 'r' and t.relname = 'SequelizeMeta' GROUP BY i.relname, ix.indexrelid, ix.indisprimary, ix.indisunique, ix.indkey ORDER BY i.relname;
Executing (default): SELECT "name" FROM "SequelizeMeta" AS "SequelizeMeta" ORDER BY "SequelizeMeta"."name" ASC;
== 20220612013222-create-clientes: migrating =======
Executing (default): CREATE TABLE IF NOT EXISTS "roles" ("id_rol"   SERIAL , "nombre_rol" VARCHAR(255) NOT NULL UNIQUE, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT '2022-07-11 10:47:29.266 +00:00', "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT '2022-07-11 10:47:29.266 +00:00', PRIMARY KEY ("id_rol"));
Executing (default): CREATE TABLE IF NOT EXISTS "clientes" ("rut_cliente" INTEGER NOT NULL , "nombre_cliente" VARCHAR(255) NOT NULL, "apmat_cliente" VARCHAR(255) NOT NULL, "appat_cliente" VARCHAR(255) NOT NULL, "correo_cliente" VARCHAR(255) NOT NULL UNIQUE, "tel_cliente" VARCHAR(255) NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT '2022-07-11 10:47:29.278 +00:00', "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT '2022-07-11 10:47:29.278 +00:00', PRIMARY KEY ("rut_cliente"));
Executing (default): CREATE TABLE IF NOT EXISTS "colaboradores" ("rut_colaborador" INTEGER NOT NULL , "password_colaborador" VARCHAR(255) NOT NULL, "nombre_colaborador" VARCHAR(255) NOT NULL, "apmat_colaborador" VARCHAR(255) NOT NULL, "appat_colaborador" VARCHAR(255) NOT NULL, "roles_id_rol" INTEGER REFERENCES "roles" ("id_rol") ON DELETE SET NULL ON UPDATE CASCADE, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT '2022-07-11 10:47:29.285 +00:00', "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT '2022-07-11 10:47:29.285 +00:00', PRIMARY KEY ("rut_colaborador"));
Executing (default): CREATE TABLE IF NOT EXISTS "marcas_dispositivos" (
    "id_marca"   SERIAL , 
    "nombre_marca" VARCHAR(255) NOT NULL, 
    "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT '2022-07-11 10:47:29.288 +00:00', 
    "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT '2022-07-11 10:47:29.288 +00:00', 
    PRIMARY KEY ("id_marca"));
Executing (default): CREATE TABLE IF NOT EXISTS "tipos_dispositivos" ("id_tipo"   SERIAL , "nombre_tipo" VARCHAR(255) NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT '2022-07-11 10:47:29.291 +00:00', "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT '2022-07-11 10:47:29.291 +00:00', PRIMARY KEY ("id_tipo"));
Executing (default): CREATE TABLE IF NOT EXISTS "dispositivos" (
    "id_dispositivo"   SERIAL , 
    "num_serie_dispositivo" INTEGER NOT NULL, 
    "modelo" VARCHAR(255) NOT NULL, 
    "marcas_dispositivos_ID_marcas" INTEGER REFERENCES "marcas_dispositivos" ("id_marca"), 
    "tipos_dispositivos_ID_tipos" INTEGER REFERENCES "tipos_dispositivos" ("id_tipo"), 
    "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT '2022-07-11 10:47:29.293 +00:00', 
    "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT '2022-07-11 10:47:29.293 +00:00', 
    PRIMARY KEY ("id_dispositivo"));

ERROR: column "id_marca" referenced in foreign key constraint does not exist



CREATE TABLE IF NOT EXISTS "clientes" ("rut_cliente" INTEGER NOT NULL , "nombre_cliente" VARCHAR(255) NOT NULL, "apmat_cliente" VARCHAR(255) NOT NULL, "appat_cliente" VARCHAR(255) NOT NULL, "correo_cliente" VARCHAR(255) NOT NULL UNIQUE, "tel_cliente" VARCHAR(255) NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL, "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL, PRIMARY KEY ("rut_cliente"));

Executing (default): SELECT i.relname AS name, ix.indisprimary AS primary, ix.indisunique AS unique, ix.indkey AS indkey, array_agg(a.attnum) as column_indexes, array_agg(a.attname) AS column_names, pg_get_indexdef(ix.indexrelid) AS definition FROM pg_class t, pg_class i, pg_index ix, pg_attribute a WHERE t.oid = ix.indrelid AND i.oid = ix.indexrelid AND a.attrelid = t.oid AND t.relkind = 'r' and t.relname = 'clientes' GROUP BY i.relname, ix.indexrelid, ix.indisprimary, ix.indisunique, ix.indkey ORDER BY i.relname;

Executing (default): DROP TABLE IF EXISTS "tipos_dispositivos" CASCADE;

Executing (default): CREATE TABLE IF NOT EXISTS "tipos_dispositivos" ("id_tipo"   SERIAL , "nombre_tipo" VARCHAR(255) NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL, "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL, PRIMARY KEY ("id_tipo"));

Executing (default): SELECT i.relname AS name, ix.indisprimary AS primary, ix.indisunique AS unique, ix.indkey AS indkey, array_agg(a.attnum) as column_indexes, array_agg(a.attname) AS column_names, pg_get_indexdef(ix.indexrelid) AS definition FROM pg_class t, pg_class i, pg_index ix, pg_attribute a WHERE t.oid = ix.indrelid AND i.oid = ix.indexrelid AND a.attrelid = t.oid AND t.relkind = 'r' and t.relname = 'tipos_dispositivos' GROUP BY i.relname, ix.indexrelid, ix.indisprimary, ix.indisunique, ix.indkey ORDER BY i.relname;

Executing (default): DROP TABLE IF EXISTS "marcas_dispositivos" CASCADE;

Executing (default): CREATE TABLE IF NOT EXISTS "marcas_dispositivos" ("id_marca"   SERIAL , "nombre_marca" VARCHAR(255) NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL, "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL, PRIMARY KEY ("id_marca"));

Executing (default): SELECT i.relname AS name, ix.indisprimary AS primary, ix.indisunique AS unique, ix.indkey AS indkey, array_agg(a.attnum) as column_indexes, array_agg(a.attname) AS column_names, pg_get_indexdef(ix.indexrelid) AS definition FROM pg_class t, pg_class i, pg_index ix, pg_attribute a WHERE t.oid = ix.indrelid AND i.oid = ix.indexrelid AND a.attrelid = t.oid AND t.relkind = 'r' and t.relname = 'marcas_dispositivos' GROUP BY i.relname, ix.indexrelid, ix.indisprimary, ix.indisunique, ix.indkey ORDER BY i.relname;

Executing (default): DROP TABLE IF EXISTS "roles" CASCADE;

Executing (default): CREATE TABLE IF NOT EXISTS "roles" ("id_rol"   SERIAL , "nombre_rol" VARCHAR(255) NOT NULL UNIQUE, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL, "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL, PRIMARY KEY ("id_rol"));

Executing (default): SELECT i.relname AS name, ix.indisprimary AS primary, ix.indisunique AS unique, ix.indkey AS indkey, array_agg(a.attnum) as column_indexes, array_agg(a.attname) AS column_names, pg_get_indexdef(ix.indexrelid) AS definition FROM pg_class t, pg_class i, pg_index ix, pg_attribute a WHERE t.oid = ix.indrelid AND i.oid = ix.indexrelid AND a.attrelid = t.oid AND t.relkind = 'r' and t.relname = 'roles' GROUP BY i.relname, ix.indexrelid, ix.indisprimary, ix.indisunique, ix.indkey ORDER BY i.relname;

Executing (default): DROP TABLE IF EXISTS "colaboradores" CASCADE;

Executing (default): CREATE TABLE IF NOT EXISTS "colaboradores" ("rut_colaborador" INTEGER NOT NULL , "password_colaborador" VARCHAR(255) NOT NULL, "nombre_colaborador" VARCHAR(255) NOT NULL, "apmat_colaborador" VARCHAR(255) NOT NULL, "appat_colaborador" VARCHAR(255) NOT NULL, "roles_id_rol" INTEGER REFERENCES "roles" ("id_rol") ON DELETE SET NULL ON UPDATE CASCADE, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL, "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL, PRIMARY KEY ("rut_colaborador"));

Executing (default): SELECT i.relname AS name, ix.indisprimary AS primary, ix.indisunique AS unique, ix.indkey AS indkey, array_agg(a.attnum) as column_indexes, array_agg(a.attname) AS column_names, pg_get_indexdef(ix.indexrelid) AS definition FROM pg_class t, pg_class i, pg_index ix, pg_attribute a WHERE t.oid = ix.indrelid AND i.oid = ix.indexrelid AND a.attrelid = t.oid AND t.relkind = 'r' and t.relname = 'colaboradores' GROUP BY i.relname, ix.indexrelid, ix.indisprimary, ix.indisunique, ix.indkey ORDER BY i.relname;

Executing (default): DROP TABLE IF EXISTS "dispositivos" CASCADE;

Executing (default): CREATE TABLE IF NOT EXISTS "dispositivos" ("id_dispositivo"   SERIAL , "num_serie_dispositivo" INTEGER NOT NULL, "modelo" VARCHAR(255) NOT NULL, "marcas_dispositivos_ID_marcas" INTEGER REFERENCES "marcas_dispositivos" ("id_marca"), "tipos_dispositivos_ID_tipos" INTEGER REFERENCES "tipos_dispositivos" ("id_tipo"), "created_at" TIMESTAMP WITH TIME ZONE NOT NULL, "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL, PRIMARY KEY ("id_dispositivo"));

Executing (default): SELECT i.relname AS name, ix.indisprimary AS primary, ix.indisunique AS unique, ix.indkey AS indkey, array_agg(a.attnum) as column_indexes, array_agg(a.attname) AS column_names, pg_get_indexdef(ix.indexrelid) AS definition FROM pg_class t, pg_class i, pg_index ix, pg_attribute a WHERE t.oid = ix.indrelid AND i.oid = ix.indexrelid AND a.attrelid = t.oid AND t.relkind = 'r' and t.relname = 'dispositivos' GROUP BY i.relname, ix.indexrelid, ix.indisprimary, ix.indisunique, ix.indkey ORDER BY i.relname;

Executing (default): DROP TABLE IF EXISTS "tickets" CASCADE;

Executing (default): CREATE TABLE IF NOT EXISTS "tickets" ("ID_ticket"   SERIAL , "problema_ticket" VARCHAR(255) NOT NULL, "diagnostico_ticket" VARCHAR(255), "resolucion_ticket" VARCHAR(255), "estado_ticket" INTEGER NOT NULL, "dispositivos_ID_dispositivo" INTEGER NOT NULL REFERENCES "dispositivos" ("id_dispositivo"), "clientes_ID_cliente" INTEGER NOT NULL REFERENCES "clientes" ("rut_cliente") ON DELETE CASCADE ON UPDATE CASCADE, "colaboradores_ID_colaborador" INTEGER NOT NULL REFERENCES "colaboradores" ("rut_colaborador"), "created_at" TIMESTAMP WITH TIME ZONE NOT NULL, "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL, "ticketClienteRutCliente" INTEGER REFERENCES "clientes" ("rut_cliente") ON DELETE SET NULL ON UPDATE CASCADE, PRIMARY KEY ("ID_ticket"));

Executing (default): SELECT i.relname AS name, ix.indisprimary AS primary, ix.indisunique AS unique, ix.indkey AS indkey, array_agg(a.attnum) as column_indexes, array_agg(a.attname) AS column_names, pg_get_indexdef(ix.indexrelid) AS definition FROM pg_class t, pg_class i, pg_index ix, pg_attribute a WHERE t.oid = ix.indrelid AND i.oid = ix.indexrelid AND a.attrelid = t.oid AND t.relkind = 'r' and t.relname = 'tickets' GROUP BY i.relname, ix.indexrelid, ix.indisprimary, ix.indisunique, ix.indkey ORDER BY i.relname;

Executing (default): DROP TABLE IF EXISTS "repuestos" CASCADE;

Executing (default): CREATE TABLE IF NOT EXISTS "repuestos" ("ID_repuesto"   SERIAL , "repuesto" VARCHAR(255) NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL, "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL, PRIMARY KEY ("ID_repuesto"));

Executing (default): SELECT i.relname AS name, ix.indisprimary AS primary, ix.indisunique AS unique, ix.indkey AS indkey, array_agg(a.attnum) as column_indexes, array_agg(a.attname) AS column_names, pg_get_indexdef(ix.indexrelid) AS definition FROM pg_class t, pg_class i, pg_index ix, pg_attribute a WHERE t.oid = ix.indrelid AND i.oid = ix.indexrelid AND a.attrelid = t.oid AND t.relkind = 'r' and t.relname = 'repuestos' GROUP BY i.relname, ix.indexrelid, ix.indisprimary, ix.indisunique, ix.indkey ORDER BY i.relname;

Executing (default): DROP TABLE IF EXISTS "repuestos_has_tickets" CASCADE;

Executing (default): CREATE TABLE IF NOT EXISTS "repuestos_has_tickets" ("repuestos_id_repuesto" INTEGER NOT NULL  REFERENCES "repuestos" ("ID_repuesto") ON DELETE CASCADE ON UPDATE CASCADE, "tickets_id_ticket" INTEGER NOT NULL  REFERENCES "tickets" ("ID_ticket") ON DELETE CASCADE ON UPDATE CASCADE, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL, "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL, PRIMARY KEY ("repuestos_id_repuesto","tickets_id_ticket"));

Executing (default): SELECT i.relname AS name, ix.indisprimary AS primary, ix.indisunique AS unique, ix.indkey AS indkey, array_agg(a.attnum) as column_indexes, array_agg(a.attname) AS column_names, pg_get_indexdef(ix.indexrelid) AS definition FROM pg_class t, pg_class i, pg_index ix, pg_attribute a WHERE t.oid = ix.indrelid AND i.oid = ix.indexrelid AND a.attrelid = t.oid AND t.relkind = 'r' and t.relname = 'repuestos_has_tickets' GROUP BY i.relname, ix.indexrelid, ix.indisprimary, ix.indisunique, ix.indkey ORDER BY i.relname;


