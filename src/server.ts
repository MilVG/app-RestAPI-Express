import colors from "colors"
import express from "express"
import router from "./router"
import db from "./config/db"
const server = express()

async function conectionDB() {
  try {
    await db.sync()

  } catch (error) {
    console.log(colors.yellow(error));

  }
}

conectionDB()
server.use('/api/products', router)

export default server

