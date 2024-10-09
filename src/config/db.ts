import { Sequelize } from "sequelize";
import dotenv from 'dotenv'
dotenv.config()


const db = new Sequelize(process.env.NAME_DB, process.env.USER_NAME, process.env.PASSWORD, {
  host: process.env.NAME_HOST,  // O 'localhost' si es en tu máquina local
  dialect: 'postgres',
  port: 5432,        // El puerto por defecto de PostgreSQL
});

// Probar la conexión
db.authenticate()
  .then(() => {
    console.log('Conexión establecida correctamente.');
  })
  .catch(err => {
    console.error('No se pudo conectar a la base de datos:', err);
  });

export default db

/*Llamando con url creada una base de datos en render copiar el uri de la conexion general
  
  const db = new Sequelize('copy_uri')

  ##Adicionalmente forzar la conexion ssl para que funcione
  => new Sequelize('uri?ssl=true')

  export default db

  ##=>ARCHINVO DDE SE MANEJARA LA CONEXIONO

  async function conectionDB(){
    try{
      await db.authenticate()
      db.sync()
      console.log('Conexion exitosa');
    }catch(error){
      console.log(error);
    
    }
  }
 */
