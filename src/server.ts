import express from "express"

const server = express()

//Routing
server.get('/', (req, res) => {
  const auth = true
  res.send(auth)
})

export default server

