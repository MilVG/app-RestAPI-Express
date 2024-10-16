import cors, { CorsOptions } from 'cors'
import colors from "colors"
import express, { Application } from "express"
import swaggerUi from 'swagger-ui-express'
import swaggerSpec, { swaggerUiOptions } from "./config/swagger"
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

//permitir conexiones
const corsOptions: CorsOptions = {
  origin: function (origin, callback) {
    if (origin === process.env.FRONTEND_URL) {
      callback(null, true)
    } else {
      callback(new Error('Error de Cors'))

    }

  }
}

server.use(cors(corsOptions))
//lectura de datos en la terminal tipo json
server.use(express.json())


server.use('/api/products', router)

//Docs
server.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, swaggerUiOptions))
export default server

