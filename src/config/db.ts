import { Sequelize } from "sequelize";

const db = new Sequelize('DBProductos', 'postgres', 'Milton123', {
  host: 'localhost',  // O 'localhost' si es en tu máquina local
  dialect: 'postgres',
  port: 5432,        // El puerto por defecto de PostgreSQL
  logging: false,    // Opcional: desactiva el registro de consultas SQL
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
