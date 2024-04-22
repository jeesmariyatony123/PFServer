//loads .env file contents into process.env by default
//1. import dotenv, cors, express
require("dotenv").config()
const express = require('express')
const cors = require('cors')
const router = require('./Routes/router')
require('./DB/connection')

//2. creates an express applications.. /server
const pfServer = express()

//3. use cors in express server
pfServer.use(cors())
pfServer.use(express.json())
//9. & from router.js
pfServer.use(router)
pfServer.use('/uploads', express.static('./uploads'))

//4. set up port where we have to run server
const PORT = 3000 || process.env.PORT

//5. run the server to listen client request
pfServer.listen(PORT, () => {
    console.log(`Project Fair Server Started at PORT: ${PORT}`);
})

//6. To resolve http request using express
// express-server.httprequest(path,callback)
//http://localhost:3000/
pfServer.get("/", (req, res) => {
    res.status(200).send(`<h1 style="color:red">Project Fair Server Started and waiting for client request!!!</h1>`)
})

// pfServer.post("/", (req, res) => {
//     res.status(200).send(`POST REQUEST`)
// })