import server from "./server"


server.listen(4000, () => {
  console.log(`REST API en el puerto 4000`);

})

/* 
 
 ##=>QUE ES UN ORM--##
  =>un ORM es un intermediario para consultas a una base de datos,
  este como tal agiliza tareas basicas de consulta, lo cual puedes
  centrar la logica de la aplicacion.

 ##=>TIPOS DE ORM--##
 
 => Mongoose
 =>Prisma
 => Sequelize
 =>TypeORM


 ##=>SOPORTE DE BASE DE DATOS--##

 => Mongoose: MongoDB
 =>Sequelize: Oracle,Postgres,MySQL,MariaDB,SQLite,SQL server
 =>Prisma: PostgresSQL, MySQL y SQLite
 =>TypeORM: MySQL, MariaDB, Postgres, CockroachDB, SQLite, Oracle, sql. js, MongoDB, entre otros.


 ##=>CREACIÓN DE BASE DE DATOS CON LA PLATAFORMA DE RENDER-##
  => Gestor Utilizado: PostgresSQL
  

 ##=>INSTALACION DE ORM CON EL QUE SE TRABAJARÁ =>Sequelize--##
    --revisar la pagina official de instalación.
    
    #DEPENDENCIAS DE INSTALACIÓN Sequelize#
      => npm install --save sequelize
    
    #DEPENDENCIAS DE INSTALACIÓN Base de datos#
      => npm install --save pg pg-hstore
 */

