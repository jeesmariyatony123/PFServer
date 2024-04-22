
---------------------------------------------
Express
---------------------------------------------

Steps to build express server
    1. Create a folder for server
    2. Create package.json file npm init -y
    3. Update scripts in package.json file as "start": "node index.js" instead of "test"
    4. Install external packages to build server
        - express, cors, dotenv
        - npm i express cors dotenv
    5. Create .env file to add environmetal variable
    6. Create .gitignore file to add files tobe ignored
        - node_modules .env
    7. Create index.js file define server:

        - import dotenv,cors, express 

            require("dotenv").config()
            const express = require('express')
            const cors = require('cors')

        - create express server

            const pfServer = express()

        - Use cors in express server

            pfServer.use(cors())

        - use express.json() in server to parse json data in request
        - use router in server

            pfServer.use(express.json())


        - Set up port where we have to run server

            const PORT = 3000 || process.env.PORT

        - run the server to listen client request

            pfServer.listen(PORT, () => {
                console.log(`Project Fair Server Started at PORT: ${PORT}`);
            })
        - To resolve http request using express    @http://localhost:3000/
            - express-server.httprequest(path,callback)

            pfServer.get("/", (req, res) => {
                res.status(200).send(`<h1 style="color:red">Project Fair Server Started and waiting for client request!!!</h1>`)
            })

<!-- Finally index.js -->
            require("dotenv").config()
            const express = require('express')
            const cors = require('cors')

            const pfServer = express()

            pfServer.use(cors())
            pfServer.use(express.json())

            const PORT = 3000 || process.env.PORT

            pfServer.listen(PORT, () => {
                console.log(`Project Fair Server Started at PORT: ${PORT}`);
            })

            pfServer.get("/", (req, res) => {
                    res.status(200).send(`<h1 style="color:red">Project Fair Server Started and waiting for client request!!!</h1>`)
            })
<!--  -->

        - To setup independent routes for each request in express server
            - create routes folder
                - Inside routes folder create @router.js file to define route/ path for each request
                - import express
                    const express = require('express')

                - create object for Router class of express to set up routes

                    const router = new express.Router()
                    
                - Create Controllers folder to define logic to resolve request
                   - Inside folder, create @userController.js file
<!-- Finally userController.js -->
                        exports.register = async (req, res) => {
                            console.log("Inside Register function!!!");
                            res.status(200).json("Request Recieved...")
                        }
<!--  -->
                - @router.js

                    const userController = require('../Controllers/userController')

                    router.post('/register', userController.register)

<!-- finally router.js -->

                    const express = require('express')
                    const userController = require('../Controllers/userController')

                    const router = new express.Router()

                    router.post('/register', userController.register)

                    module.exports = router
<!--  -->


                - @index.js

                    const router = require('./Routes/router')

                    pfServer.use(router)

<!-- Finally index.js -->
            require("dotenv").config()
            const express = require('express')
            const cors = require('cors')
            const router = require('./Routes/router')

            const pfServer = express()

            pfServer.use(cors())
            pfServer.use(express.json())
            pfServer.use(router)

            const PORT = 3000 || process.env.PORT

            pfServer.listen(PORT, () => {
                console.log(`Project Fair Server Started at PORT: ${PORT}`);
            })

            pfServer.get("/", (req, res) => {
                    res.status(200).send(`<h1 style="color:red">Project Fair Server Started and waiting for client request!!!</h1>`)
            })
<!--  -->

                - @userController.js

                    const { username, email, password } = req.body

<!-- finally userController.js -->
            exports.register (req, res)=>{
                console.log("Inside Register function!!!");
                const {username, email, password} = req.body
                console.log(username, email, password);
                res.status(200).json("Request Recieved!!!")
            }




    8. To run server app: node index.js / nodemon index.js

---------------------------------------------
    Postman
---------------------------------------------

1. Open postman
2. create new collection +
3. Blank collection
4. write collection name 
5. click add a request
6. write REQUEST_NAME
7. give http://localhost:3000/ at corresponding box
8. @Body
    raw->{
    "username":"Max Miller",
    "email":"max@gmail.com",
    "password":"max123"
    }
8. @Headers

---------------------------------------------
    Mongodb
---------------------------------------------

    - Databases are used to store and manipulate data permanently
    - NOSQL Database: Structureless DB
    - Data stored as document - Document Oriented DB
    - document is similar as JSON
        -_id: every document has unique id generated by mongodb
    - Collection collection of documents
    - Multiple collections be hold in single db
    -Common Commands in MongoDB
        - show databases: display all db
        - show db-name shift control to specific db
        - show collections display all collections in a db
        - collection-name.find(): to display all documents in a collection
        - collection-name.findOne({key: value}): to display single document which is in the collection
        - collection-name.insertOne({key:value}): to add single document in a collection
        - collection-name.insertMany([{key:value}]): to add multiple document in a collection
        - collection-name.updateMany([{source},{$set:{target}}]) : to update multiple documents in a collection
        - collection-name.updateOne([{source},{$set:{target}}]) : to update single documents in a collection
        - collection-name.deleteMany(): to delete multiple documents in a collection
        - collection-name.deleteOne(): to delete single documents in a collection
        - count(): display total count of items items in a collection
        - Querying statements
            $exists
            $nin
            $gt/gte/lt/lte
            $eq
            $and
            $or
            $expr
        
        - $lookup(aggregation): Performs a left outer join to a collection in the same database to filter in documents from the "joined" collection for processing
            db.collection-name.aggregate([{
                $lookup: {
                    from: <collection to join>,
                    localField: <field from the input documents>,
                    foreignField: <field from the documents of the "from" collection>,
                    as: <output array field>
                }
            }])

1. connect [if issue: search -> services -> mongodb -> start -> connect]
2. Databases tab
3. create database -> database name -> collection name(Plural,small_letters) users 
4. Database_name -> ADD DATA -> insert document -> insert

---------------------------------------------
    Mongodb Atlas
---------------------------------------------

    1. mongodb atlas login
    2. sign up
    3. deploy your database -> free -> create deployment
    4. left side -> dropdown -> + New Project -> Name your project -> Next-> Create Project
    5. left side -> DEPLOYMENT -> Database -> Build Database -> (connect to cluster0) Cancel
    6. left side -> database -> Browse Collections -> Create Database -> Db name (no space) -> collection name(small_letter, plural) -> create
@1:19:00 day44
    7. left side -> Database Access -> Add New Database User -> username -> password(jees) ->Add User
    8. left side -> database -> connect -> username -> password(jees) -> Create Database user -> Choose a connection method -> Drivers -> "copy connection string" -> Review setup steps -> Done
    9. left side -> Network Access -> Edit -> ALLOW ACCESS FROM ANYWHERE -> Confirm

---------------------------------------------
    Mongoose
---------------------------------------------
    - ODM (Object Data Model for Mongodb to Nodejs)
    - communicate b/w node and mongodb
    - connect db with node.js
    1. Install mongoose
        npm install mongoose --save
    2. Create a DB Folder for defining db connection and create connection.js file
    3. @connection.js

        const mongoose = require('mongoose')

    4. @.env
        
        CONNECTION_STRING = mongodb+srv://jeesmariya:jees@cluster0.izfqo2s.mongodb.net/projectFairDB?retryWrites=true&w=majority&appName=Cluster0

        eg. mongodb+srv://jeesmariya:<password>@cluster0.qxaoxqa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

    5. @connection.js
        Import mongoose - connect db via mongoose

        const mongoose = require('mongoose')

        mongoose.connect(process.env.CONNECTION_STRING).then(
            result => {
                console.log("Mongodb Atlas connected with pfServer");
            }
            ).catch(err => {
                console.log("connection failed!!!");
                console.log(err);
        })

    6. @index.js

        require('./DB/connection')

<!-- Finally index.js -->
            require("dotenv").config()
            const express = require('express')
            const cors = require('cors')
            const router = require('./Routes/router')
            require('./DB/connection')

            const pfServer = express()

            pfServer.use(cors())
            pfServer.use(express.json())
            pfServer.use(router)

            const PORT = 3000 || process.env.PORT

            pfServer.listen(PORT, () => {
                console.log(`Project Fair Server Started at PORT: ${PORT}`);
            })

            pfServer.get("/", (req, res) => {
                    res.status(200).send(`<h1 style="color:red">Project Fair Server Started and waiting for client request!!!</h1>`)
            })
<!--  -->

----------------------

    7. Schema structure of data / document tobe stored in db
        - create object for mongoose. Schema class
        - Schema types
    8. Model: collection of documents
        - mongoose.model(model-name, schema)
        - Node app will communicate with model instead of monogdb directly
        
        - create Models folder & inside @userModel.js
<!-- finally userModel.js -->
            const mongoose = require('mongoose')

            const userSchema = new mongoose.Schema({
                username: {
                    type: String,
                    required: true
                },
                email: {
                    type: String,
                    required: true,
                    unique: true
                },
                password: {
                    type: String,
                    required: true
                },
                github: {
                    type: String
                },
                linkedin: {
                    type: String
                },
                profile: {
                    type: String
                }
            })

const users = mongoose.model("users", userSchema) 
//name of collections and model should be same

module.exports = users
<!--  -->

    - @userController.js

    const users = require('../Models/userModel')

    //register
    exports.register = async (req, res) => {
        console.log("Inside Register function!!!");
        const { username, email, password } = req.body
        console.log(username, email, password);
        try {
            const existingUser = await users.findOne({ email })
            if (existingUser) {
                res.status(406).json("User Already exists!!!")
            } else {
                const newUser = new users({
                    username, email, password, github: "", linkedin: "", profile: ""
                })
                await newUser.save()
                res.status(200).json(newUser)
            }
        } catch (err) {
            res.status(401).json(err)
        }
    }

    @postman
     POST -> BODY -> 