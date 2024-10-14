import colors from "colors"
import express, { Application } from "express"
import router from "./router"
import db from "./config/db"

export async function conectionDB() {
  try {

    await db.authenticate()
    db.sync()
  } catch (error) {
    console.log(colors.red.bold('Hubo un error al conectar a la BD'));

  }
}
conectionDB()

//Instancia de express
const server: Application = express()

//lectura de datos en la terminal tipo json
server.use(express.json())


server.use('/api/products', router)

export default server

