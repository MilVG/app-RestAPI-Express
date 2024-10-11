import colors from "colors"
import express, { Application } from "express"
import router from "./router"
import db from "./config/db"

async function conectionDB() {
  try {
    await db.sync()

  } catch (error) {
    console.log(colors.yellow(error));

  }
}
conectionDB()

//Instancia de express
const server: Application = express()

//lectura de datos en la terminal tipo json
server.use(express.json())


server.use('/api/products', router)

export default server

