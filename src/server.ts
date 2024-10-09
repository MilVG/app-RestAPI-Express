import express from "express"
import router from "./router"
import db from "./config/db"
const server = express()

async function conectionDB() {
  try {

    await db.sync()
    console.log('conexione xitossa');

  } catch (error) {
    console.log(error);

  }
}

conectionDB()
server.use('/api/products', router)

export default server

