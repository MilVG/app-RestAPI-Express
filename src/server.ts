import express from "express"

const server = express()

//Routing
server.get('/', (req, res) => {
  res.send('Hola Mundo en Express')
})

export default server
